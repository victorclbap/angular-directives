import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  //sempre que a condição altera executa um metodo com o set
  //
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // cria uma view
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // remove do dom
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, // dá acesso ao template que vai ser visualizado
    private vcRef: ViewContainerRef // lugar onde é renderizado
  ) {}
}
