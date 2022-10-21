import { Injectable } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable, of } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import { User } from 'src/app/shared/models/User'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor (private storage: AngularFireStorage) {}

  createDb () {
    console.log('creating db')
    let users: User[] = []

    const cars: Car[] = [
      {
        id: 'Audi RS5',
        price: 120000,
        year: 2022,
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/angular-akademija-app.appspot.com/o/images%2FAudi%20RS5%2Fexteriors%2Fc2w1%2F1.png?alt=media&token=19016072-45dd-4c10-8a77-9bbd66ced124',
        colors: [
          {
            id: 'c1',
            name: 'Turbo Blue',
            price: 2300,
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/car-configurator-8885c.appspot.com/o/images%2FColor%20palette%2FColor-TurboBlue.png?alt=media&token=0503724e-fbbf-4255-9992-c82d69ddcfee'
          }
        ],
        interiors: [
          {
            id: 'c1',
            name: 'Turbo Blue',
            price: 2300,
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/car-configurator-8885c.appspot.com/o/images%2FColor%20palette%2FColor-TurboBlue.png?alt=media&token=0503724e-fbbf-4255-9992-c82d69ddcfee'
          }
        ],
        wheels: [
          {
            id: 'c1',
            name: 'Turbo Blue',
            price: 2300,
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/car-configurator-8885c.appspot.com/o/images%2FColor%20palette%2FColor-TurboBlue.png?alt=media&token=0503724e-fbbf-4255-9992-c82d69ddcfee'
          }
        ]
      }
    ]
    return { users, cars }
  }
}
