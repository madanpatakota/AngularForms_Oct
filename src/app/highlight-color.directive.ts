import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]'
})
export class HighlightColorDirective implements OnChanges{

  constructor(private elementref : ElementRef , private rd: Renderer2) {
     console.log(this.elementref);
     console.log(this.elementref.nativeElement);// p

    //  spam informaton
    //  this.elementref.nativeElement.style.backgroundColor = 'yellow';
    //  this.elementref.nativeElement.style.fontWeight = 'bold';
    //  this.elementref.nativeElement.style.fontSize = '20px';
    //  this.elementref.nativeElement.style.fontFamily = 'Arial, Helvetica, sans-serif';
    //  this.elementref.nativeElement.style.color = 'red';


    this.rd.setStyle(this.elementref.nativeElement,'backgroundColor','yellow');


    // this.rd.setStyle(this.elementref.nativeElement,'fontWeight','bold');
    // this.rd.setStyle(this.elementref.nativeElement,'fontSize','20px');
    // this.rd.setStyle(this.elementref.nativeElement,'fontFamily','Arial, Helvetica, sans-serif');
    // this.rd.setStyle(this.elementref.nativeElement,'color','red');

   }


   @Input() highlightBackgroundColor !: string;
   @Input() highlightFontColor       !: string;
   @Input() hightlightFontWeight     !: string;
   @Input() highlightFontSize        !: string;

   ngOnChanges(changes: SimpleChanges) {

    //console.log(this.highlightColor);
      this.rd.setStyle(this.elementref.nativeElement,'background-color',this.highlightBackgroundColor);

      // this.rd.setStyle(this.elementref.nativeElement,'color',this.highlightFontColor);

      // this.rd.setStyle(this.elementref.nativeElement,'font-weight',this.hightlightFontWeight);

      // this.rd.setStyle(this.elementref.nativeElement,'font-size',this.highlightFontSize);


   }


   @HostListener('mouseenter') onMouseEnter() {
    this.rd.setStyle(this.elementref.nativeElement,'background-color', 'green');
   }

    @HostListener('mouseleave') onMouseLeave() {
      this.rd.setStyle(this.elementref.nativeElement,'background-color', this.highlightBackgroundColor);
    }

    @HostListener('click') onClick() {
      this.rd.setStyle(this.elementref.nativeElement,'background-color', 'pink');

      this.border = '5px solid blue';
      this.margin = '10px';
      this.padding = '10px';
//this.rd.setStyle(this.elementref.nativeElement,'background-color', 'pink');


    }


    //host here is the element where the directive is applied
    @HostBinding('style.border')  border !: string;
    @HostBinding('style.margin')  margin !: string
    @HostBinding('style.padding') padding !: string;




}
