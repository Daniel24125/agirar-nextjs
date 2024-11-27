import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipAbstraction = ({
    title,
    children
}:{
    title: string,
    children: React.ReactNode
}) => {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger> {children}</TooltipTrigger>
            <TooltipContent>{title}</TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipAbstraction