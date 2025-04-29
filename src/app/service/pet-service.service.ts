import { Injectable } from '@angular/core';
import { PetModels } from '../models/pet-models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  constructor() { }

  private petDetailsSubject = new BehaviorSubject('');
  public petDetilsObservable = this.petDetailsSubject.asObservable();

  public dogList: PetModels[] = [
    {
     name: 'Max',
     breed: 'Mix',
     age: 10,
     id: 0,
     image: 'dogs/dog1.jpg'
    },
    {
      name: 'Charlie',
      breed: 'Mix',
      age: 8,
      id: 1,
      image: 'dogs/dog2.jpg'
     },
     {
      name: 'Cooper',
      breed: 'Mix',
      age: 11,
      id: 2,
      image: 'dogs/dog3.jpg'
     },
     {
      name: 'Lucy',
      breed: 'Mix',
      age: 15,
      id: 3,
      image: 'dogs/dog4.jpg'
     },
     {
      name: 'Lily',
      breed: 'Mix',
      age: 3,
      id: 4,
      image: 'dogs/dog5.jpg'
     },
     {
      name: 'Zoe',
      breed: 'Mix',
      age: 6,
      id: 5,
      image: 'dogs/dog6.jpg'
     },
     {
      name: 'Daisy',
      breed: 'Mix',
      age: 10,
      id: 6,
      image: 'dogs/dog7.jpg'
     },
     {
      name: 'Luna',
      breed: 'Mix',
      age: 10,
      id: 7,
      image: 'dogs/dog8.jpg'
     },
     {
      name: 'Buddy',
      breed: 'Mix',
      age: 10,
      id: 8,
      image: 'dogs/dog9.jpg'
     },
     {
      name: 'Max',
      breed: 'Mix',
      age: 10,
      id: 0,
      image: 'dogs/dog1.jpg'
     },
     {
       name: 'Charlie',
       breed: 'Mix',
       age: 8,
       id: 1,
       image: 'dogs/dog2.jpg'
      },
      {
       name: 'Cooper',
       breed: 'Mix',
       age: 11,
       id: 2,
       image: 'dogs/dog3.jpg'
      },
      {
       name: 'Lucy',
       breed: 'Mix',
       age: 15,
       id: 3,
       image: 'dogs/dog4.jpg'
      },
      {
       name: 'Lily',
       breed: 'Mix',
       age: 3,
       id: 4,
       image: 'dogs/dog5.jpg'
      },
      {
       name: 'Zoe',
       breed: 'Mix',
       age: 6,
       id: 5,
       image: 'dogs/dog6.jpg'
      },
      {
       name: 'Daisy',
       breed: 'Mix',
       age: 10,
       id: 6,
       image: 'dogs/dog7.jpg'
      },
      {
       name: 'Luna',
       breed: 'Mix',
       age: 10,
       id: 7,
       image: 'dogs/dog8.jpg'
      },
      {
       name: 'Buddy',
       breed: 'Mix',
       age: 10,
       id: 8,
       image: 'dogs/dog9.jpg'
      }

];

public catList: PetModels[] = [
  {
   name: 'Ruby',
   breed: 'Mix',
   age: 10,
   id: 0,
   image: 'cats/cat1.jpg'
  },
  {
    name: 'Daisy',
    breed: 'Mix',
    age: 8,
    id: 1,
    image: 'cats/cat2.jpg'
   },
   {
    name: 'Nala',
    breed: 'Mix',
    age: 11,
    id: 2,
    image: 'cats/cat3.jpg'
   },
   {
    name: 'Misty',
    breed: 'Mix',
    age: 15,
    id: 3,
    image: 'cats/cat4.jpg'
   },
   {
    name: 'Ginger',
    breed: 'Mix',
    age: 3,
    id: 4,
    image: 'cats/cat5.jpg'
   },
   {
    name: 'Sassy',
    breed: 'Mix',
    age: 6,
    id: 5,
    image: 'cats/cat6.jpg'
   },
   {
    name: 'Indigo',
    breed: 'Mix',
    age: 10,
    id: 6,
    image: 'cats/cat7.jpg'
   },
   {
    name: 'Sable',
    breed: 'Mix',
    age: 10,
    id: 7,
    image: 'cats/cat8.jpg'
   },
   {
    name: 'Orion',
    breed: 'Mix',
    age: 10,
    id: 8,
    image: 'cats/cat9.jpg'
   },
   {
    name: 'Ruby',
    breed: 'Mix',
    age: 10,
    id: 0,
    image: 'cats/cat1.jpg'
   },
   {
     name: 'Daisy',
     breed: 'Mix',
     age: 8,
     id: 1,
     image: 'cats/cat2.jpg'
    },
    {
     name: 'Nala',
     breed: 'Mix',
     age: 11,
     id: 2,
     image: 'cats/cat3.jpg'
    },
    {
     name: 'Misty',
     breed: 'Mix',
     age: 15,
     id: 3,
     image: 'cats/cat4.jpg'
    },
    {
     name: 'Ginger',
     breed: 'Mix',
     age: 3,
     id: 4,
     image: 'cats/cat5.jpg'
    },
    {
     name: 'Sassy',
     breed: 'Mix',
     age: 6,
     id: 5,
     image: 'cats/cat6.jpg'
    },
    {
     name: 'Indigo',
     breed: 'Mix',
     age: 10,
     id: 6,
     image: 'cats/cat7.jpg'
    },
    {
     name: 'Sable',
     breed: 'Mix',
     age: 10,
     id: 7,
     image: 'cats/cat8.jpg'
    },
    {
     name: 'Orion',
     breed: 'Mix',
     age: 10,
     id: 8,
     image: 'cats/cat9.jpg'
    }

];

emitPetDetails(details: any) {
  this.petDetailsSubject.next(details);
}

}
