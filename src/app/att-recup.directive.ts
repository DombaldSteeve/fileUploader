import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appAttRecup]'
})
export class AttRecupDirective {

  @Input() set appAttRecup(valeur: string) {
    console.log(valeur);

  }
  constructor() {
    console.log("coucou");

   }

}
