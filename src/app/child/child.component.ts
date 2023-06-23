import { Component,Input,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
@Input() mydata:any
obj:any=[]
values:any=[]
@Output() newEvent =new EventEmitter();
ngOnInit(): void {
  this.obj=(this.mydata);
  this.values =Object.values(this.obj);
  this.values.push(this.obj)
  console.log(this.values)
}
constructor(){}
removeData(item:Number){
  this.newEvent.emit(item);
}
}
