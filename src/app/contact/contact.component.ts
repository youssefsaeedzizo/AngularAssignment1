import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myclick: any;
  showLabel($event: Event) {
    let res: any = $event.target;
    let input: any = $(res).val();
    console.log(input.length);
    if (input.length == 0) {
      this.hideLabel(res);
    } else {
      res = $(res).prev();
      res = $(res).children()[0];
      $(res).fadeTo(100,1);
      $(res).animate({ top: '-35px' }, 50);
    }
  }
  hideLabel(res: any) {
    res = $(res).prev();
    res = $(res).children()[0];
    (async function(){
      await $(res).animate({ top: '-20px' }, 150);
      $(res).fadeTo(100,0);

    })()
    
   
  }
}
