import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = ""
export const LOCAL_STORAGE = "farm2u_cart"



