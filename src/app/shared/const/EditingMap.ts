import { EditedEnum } from '../enums/EditedEnum'
import { EditingInfo } from '../models/EditingInfo'

export const EditingMap: Map<EditedEnum, EditingInfo> = new Map([
  [EditedEnum.colors, { name: 'color', description: 'Paint color' }],
  [EditedEnum.wheels, { name: 'wheel', description: 'Wheels' }],
  [EditedEnum.interiors, { name: 'interior', description: 'Color' }]
])
