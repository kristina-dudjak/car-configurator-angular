import { Injectable } from '@angular/core'
import { BehaviorSubject, map, mergeMap, Observable, tap } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { CarElement } from 'src/app/shared/models/CarElement'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private _cars$ = new BehaviorSubject<Car[]>([])
  private carss: Car[] = []
  private carsCollection: AngularFirestoreCollection<Car>
  private elementsCollection: AngularFirestoreCollection<CarElement>

  constructor (private db: AngularFirestore) {
    this.setCars()
  }

  get cars$ () {
    return this._cars$.asObservable()
  }

  getCarElements (name: string, elements: string) {
    this.elementsCollection = this.db.collection<CarElement>(
      `models/${name}/${elements}`
    )
    const items: CarElement[] = []
    this.elementsCollection.snapshotChanges().subscribe(actions =>
      actions.map(a => {
        const data = a.payload.doc.data()
        data.id = a.payload.doc.id
        items.push(data)
      })
    )
    return items
  }
  // .pipe(
  // map(actions =>
  //   actions.map(a => {
  //     const data = a.payload.doc.data()
  //     data.id = a.payload.doc.id
  //     // return { ...data }
  //     items.push(data)
  //     console.log(data)
  //   })
  // )
  // // )
  // console.log(items)
  // return items
  // }

  setCars () {
    this.carsCollection = this.db.collection<Car>('models')
    this.carsCollection.valueChanges().subscribe(cars => {
      cars.map(car => {
        this.carss.push({
          name: car.name,
          year: car.year,
          price: car.price,
          url: car.url,
          colors: this.getCarElements(car.name, 'colors'),
          interiors: this.getCarElements(car.name, 'interiors'),
          wheels: this.getCarElements(car.name, 'wheels')
        })
      })
      console.log(this.carss)
      this._cars$.next(this.carss)
    })
    // .pipe(
    //   mergeMap(cars => {
    //     this.db.doc()
    //     console.log(cars)
    //     cars.map(car => {
    //       console.log(car)
    //       this.getCarColors(car.name).subscribe(colors => {
    //         console.log(colors)
    //         car.colors = colors
    //       })
    //     })
    //     console.log(cars)
    //     this._cars$.next(cars)
    //     return cars
    //   })
    // )
  }

  getCarByName (name: string) {
    return this.cars$.pipe(
      map(cars => {
        return cars.find(car => car.name === name)
      })
    )
  }
}
