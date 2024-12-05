import { useCallback, useEffect, useRef } from "react"

export default function useSetInterval(callback:any, interval:number) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    //@ts-ignore
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