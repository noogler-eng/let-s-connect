import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const readFileAsDataUrl = (imageFile: any):Promise<string> => {
  return new Promise((resolve)=>{
    const reader = new FileReader();
    reader.onloadend = ()=>{
      if(typeof(reader.result) === `string`) return resolve(reader.result)
    }
    reader.readAsDataURL(imageFile);
  })
}
