import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private e:ElementRef,
              private rendered: Renderer2) { 
  }

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.bgColor = this.defaultColor;   
  }

  ngOnInit(): void {
    //this.rendered.setStyle(this.e.nativeElement,'backgroundColor','blue');
    this.bgColor= this.defaultColor;
  }

}
