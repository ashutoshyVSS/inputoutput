import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  ngOnInit(): any {
}
  myform!: FormGroup;
  displayedcolumns:string[] = ['Id', 'name', 'age', 'email',];
  values: any[] = [];
  submitted: boolean = false;
  selectedItemIndex: number = -1;

constructor(private _formBuilder: FormBuilder){
  this.myform = this._formBuilder.group({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    Id: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
}

onSubmit() {
  this.submitted = true;

  if (this.myform.invalid) {

    Object.values(this.myform.controls).forEach(control => {
      control.markAsTouched();
    });
    return;
  }
  else {
    console.log('Onsubmit', this.myform.value)
    if (this.myform.valid) {
    
      
      if (this.values.length > 0) {
        const temp = this.values.filter(e => e.Id == this.myform.controls['Id'].value)
        console.log(temp)
        if (temp.length > 0) {
          alert('Duplicate ID')
          this.myform.reset();
          return
        }else{
          this.values.push(this.myform.value);
          
          this.myform.reset();

        }
      }else{
        this.values.push(this.myform.value);
    
      }

    }
  }


}

removeItem(Id: number): void {
  // if(this.values.findIndex(item => item.Id == Id)){
  const i = this.values.findIndex(item => item.Id == Id)
  this.values.splice(i, 1)
  
  // }

}

} 

