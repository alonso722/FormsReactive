import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  dato$=new EventEmitter<boolean>();//observable
  dato2$=new EventEmitter<string>();//observable
  constructor() { }
}
