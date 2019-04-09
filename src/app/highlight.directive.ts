import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elref:ElementRef, private Renderer:Renderer2) { }
  ngOnInit() {
   
  }
  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.Renderer.setStyle(this.elref.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.Renderer.setStyle(this.elref.nativeElement, 'background-color', 'transparent');
  }

}
