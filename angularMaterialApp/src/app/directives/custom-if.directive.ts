import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})


export class CustomIfDirective {
  @Input() set appCustomIf(condition: boolean) {
    if(condition){
      this.vcRef.createEmbeddedView(this.temRef);
    }else {
      this.vcRef.clear();
    }
  }

  constructor(private temRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
   
   }

  
}
