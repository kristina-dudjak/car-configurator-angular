import { CarElement } from './CarElement'
import { Timestamp } from 'firebase/firestore'

export interface Configuration {
  id: number
  carName: string
  price: number
  year: number
  creationDate: Timestamp
  color: CarElement
  interior: CarElement
  wheel: CarElement
}
