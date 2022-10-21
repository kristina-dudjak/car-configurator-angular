import { CarElement } from './CarElement'

export interface Configuration {
  id: number
  carName: string
  price: number
  year: number
  creationDate: Date
  color: CarElement
  interior: CarElement
  wheel: CarElement
}
