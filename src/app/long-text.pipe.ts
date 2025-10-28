import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longText'
})
export class LongTextPipe implements PipeTransform {

  transform(value:any , limit?:any , suffix?:any ) {
    if(value.length > limit){
      value = value.slice(0,limit) + suffix;
    }
    return value;
    //console.log(value);
    //return value.toLowerCase();
    //return "Madan";
  }

}
