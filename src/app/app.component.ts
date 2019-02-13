import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myanimation]='state'(click)="animateme()">I will animate </p>

  `,
  styleUrls: ['./app.component.css'],
  styles:[`
    p{
      width:200px;
      background:lightgray;
      text-align:center;
    }`
  ],
  animations:[
    trigger('myanimation',[
      state('small',style({
        transform:'scale(1)',
      })),
      state('large',style({
        transform:'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in',style({
        transform:'translateY(40px)'
      }))),
    ]),
  ]
})
export class AppComponent {

  state:string = 'small'

  constructor(private dataService:DataService){

  }

  animateme(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  some = '';
  ngOnInit(){
    alert(this.dataService.karr);

    this.some = this.dataService.myData();
  }
  myEvent() {
    alert("clicked");
  }
}
