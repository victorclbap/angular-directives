import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  // referencia para o elemento que está implementado
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // acessa diretamente o elemento, não é boa prática
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
