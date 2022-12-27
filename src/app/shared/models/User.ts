import { Configuration } from './Configuration'

export interface User {
  id: string
  email: string
  configurations: Configuration[]
}
