import { CarElement } from './CarElement'

export interface Car {
  id: number
  name: string
  price: number
  year: number
  url: string
  colors: CarElement[]
  interiors: CarElement[]
  wheels: CarElement[]
}
