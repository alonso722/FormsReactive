import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit,OnDestroy {
  category!:any;
  types!:any;
changed($event: Event,c:any,t:any) {
console.log("Se cambio el elemento de checkbox this.quill.setcontent");
this.category=c;
this.types=t;
console.log("+"+JSON.stringify(this.category)+"-"+this.types+"+");
}
  contactForm!: FormGroup;
  //myfield=new FormControl();
  constructor(private readonly fb:FormBuilder,
    private comunicationService: ComunicationService
    ) { }

    suscripcion!:Subscription;
  ngOnInit(): void {
    //this.myfield.valueChanges;
    this.suscripcion=this.comunicationService.dato2$.subscribe((str)=>{
      console.log('Valor recibido de quill component: '+str);
    });
    this.contactForm= this.initForm();
    this.onPathValue();
    //this.onsetValue();
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  onSubmit():void
  {
    this.comunicationService.dato$.emit(true);
      console.log('Form ->'+JSON.stringify(this.contactForm.value));
  }
  initForm():FormGroup
  {
    //form builder
    return this.fb.group({//aqui van las validaciones
      name: ['',[Validators.required,Validators.minLength(6)]],
      age: ['',[Validators.required]],
      departament: ['',[Validators.required]],
      comments: ['',[Validators.required,Validators.minLength(10)]],

      // name: [''],
      // age: [''],
      // departament: [''],
    });
  }
  comunicarion_function(){

  }
  onPathValue():void{
    this.contactForm.patchValue({name: 'Bezael'});
  }
  onsetValue():void{
    this.contactForm.setValue({comments: 'Bezael'});//para usar set debo llenar todos el json del formulario
  }
}
