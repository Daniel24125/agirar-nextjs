//@ts-nocheck
import { useCallback, useEffect,useState, useRef } from "react"

export function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return

    const handler = e => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}

export function useSetInterval(callback:any, interval:number) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setInterval(() => callbackRef.current(), interval)
  }, [interval])

  const clear = useCallback(() => {
    timeoutRef.current && clearInterval(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [interval, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}


export function useMediaQuery(mediaQuery:string) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState<null | MediaQueryList>(null)

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])
  useEventListener("change", e => setIsMatch(e.matches), mediaQueryList )

  return isMatch
}