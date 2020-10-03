import { Directive, HostBinding, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {
  @Input() highlight = 'blue';
  @HostBinding('style.Color') color;
  constructor(private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === 39) {
      this.color ='blue'
    }else if (event.keyCode == 40 ) // flèche du haut
    {
      this.color = 'red';
    } else {
      this.color = 'green';
    }
    
    console.log('mouseenter event occured');
}
}
