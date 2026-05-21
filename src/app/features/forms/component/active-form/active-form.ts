import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators ,AbstractControl,ValidationErrors} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Component({
  selector: 'app-active-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './active-forms.html',
  styleUrl: './active-forms.css',
})
export class ActiveForms implements OnInit{
  myform:any;
  isAdmin: boolean = false;
  constructor(private _fp: FormBuilder){}

  ngOnInit(): void {
    this.myform =this._fp.group({
       firstName: ['',[Validators.required,Validators.minLength(3)]],  
    lastName: [''],
    email: ['',[Validators.required, Validators.email],[this.emailAsyncValidator.bind(this)]],
    password:['',[Validators.required, Validators.minLength(6)]],
    username:[''],
    address: this._fp.group({
     city: [''],
     street: [''],
     zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
})
    });
     //ممنوع ينحط ال let في الكلاس بس بداخل دوال

    let previousEmail = '';
    this.myform.get('email')?.valueChanges.subscribe((currentEmail:string) => {
  console.log('📧 Email - القديمة:', previousEmail);
  console.log('📧 Email - الجديدة:', currentEmail);
  previousEmail = currentEmail;
  const isAdminEmail = currentEmail.includes('admin');
  if(isAdminEmail){
    this.myform.get('username')?.disable();
    this.isAdmin=true;
  }else{
    this.myform.get('username')?.enable();
    this.isAdmin=false;
  }
});


    let previousForm = this.myform.value;
    this.myform?.valueChanges.subscribe((currentFormValue:any) => {
  console.log('📧 Email - القديمة:', previousForm);
  console.log('📧 Email - الجديدة:', currentFormValue);
  previousForm = currentFormValue;
});
 
  }

  emailAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> 
  {
  return of(control.value).pipe(
    delay(1500),
    map(value => value === 'test@test.com' ? { emailTaken: true } : null)
  );
 }

  toggleAdminValidator(event:any){
   this.isAdmin= event.target.checked;
   if(this.isAdmin===true){
    this.myform.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
   }else{
     this.myform.get('password')?.clearValidators();
   }
   this.myform.get('password')?.updateValueAndValidity();
  }
 handleMySubmit(event: Event){
  alert("done")
 }

}
