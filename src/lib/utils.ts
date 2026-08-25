import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAge(birthDateStr: string = "2009-08-21"): number {
  const today = new Date();
  const [year, month, day] = birthDateStr.split("-").map(Number);
  let age = today.getUTCFullYear() - year;
  const monthDiff = (today.getUTCMonth() + 1) - month;
  if (monthDiff < 0 || (monthDiff === 0 && today.getUTCDate() < day)) {
    age--;
  }
  return age;
}
