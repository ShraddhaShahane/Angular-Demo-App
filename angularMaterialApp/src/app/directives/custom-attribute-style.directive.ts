import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeStyle]'
})
export class CustomAttributeStyleDirective implements OnInit {

  @HostListener('mouseover') mouserover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'blue');
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'yellow');
  } 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // ngOnInit(){
  //   this.elRef.nativeElement.style.backgroundColor = 'blue';
  // }

  // ngOnInit(){
  //   this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'blue');
  // }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'yellow');
  }
}
