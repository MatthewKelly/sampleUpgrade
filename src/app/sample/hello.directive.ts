import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
  selector: 'app-hello'
})
export class HelloDirective extends UpgradeComponent {
  @Input()
  public user: string;
  constructor(elementRef: ElementRef, injector: Injector) {
    super('helloComponent', elementRef, injector);
  }
}