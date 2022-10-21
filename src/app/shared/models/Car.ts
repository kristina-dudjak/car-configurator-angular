import { CarElement } from './CarElement'

export interface Car {
  id: string
  // name: string
  price: number
  year: number
  imageUrl: string
  colors: CarElement[]
  interiors: CarElement[]
  wheels: CarElement[]
}
