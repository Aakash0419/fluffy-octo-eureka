import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatdate(date:string){
  return new Date(date).toLocaleDateString('UTC',{
    month:'long',
    day:'numeric' ,
    year:'numeric'
    }
  )
}