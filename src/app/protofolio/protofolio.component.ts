import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-protofolio',
  templateUrl: './protofolio.component.html',
  styleUrls: ['./protofolio.component.css']
})
export class ProtofolioComponent {
  imgSrc: any;
  
  protoFunction($event: Event) {
    let res: any = $event.target;

    if ($(res).hasClass('icon-proto')) {
      res = $(res).parent();
      res = $(res).parent();
      res = $(res).next()[0];
      this.imgSrc = $(res).attr('src');
    } else {
      this.imgSrc = $($(res).next()[0]).attr('src');
      console.log($event.target);
    }

    $('#child-demo').css({ backgroundImage: 'url(' + this.imgSrc + ')' });
    $('#demo').css({ display: 'block' });
  }

  funProto($event:Event) {
    let res:any = $event.target
   
    
    if($(res).hasClass('icon-proto')){
      res = $(res).parent();
      res = $(res).parent();
      res = $(res).next()[0];
      this.imgSrc = $(res).attr('src');
    }
    else if ($(res).hasClass('div-icon')){
      res = $(res).parent();
      res = $(res).next()[0];
      this.imgSrc = $(res).attr('src');

    }
    else{
      res  = $(res).next()[0];
      this.imgSrc = $(res).attr('src');
    }

    $('#child-demo').css({ backgroundImage: 'url(' + this.imgSrc + ')' });
    $('#demo').css({ display: 'block' });
    
  }

  closeModel($event : Event){
    let res:any = $event.target
    res = $(res).attr("id");
    if(res == "demo"){
      $("#demo").css({display:"none"})
    }
  }
}