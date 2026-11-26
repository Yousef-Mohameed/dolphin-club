import { CLUB } from '../config'

export function waLink(message: string): string {
  return `https://wa.me/${CLUB.whatsapp}?text=${encodeURIComponent(message)}`
}
