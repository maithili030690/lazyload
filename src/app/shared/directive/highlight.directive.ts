import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  @Input() appHighlight: string = ''; // The text to search for
  @Input() fullText: string = ''; // The full text content
  constructor(private el: ElementRef, private renderer: Renderer2) {
    
   }
 
  ngOnChanges(changes:SimpleChanges){
    console.log('changes')
    this.applyHighlight()
  }
  private applyHighlight() {
    if (!this.appHighlight || !this.fullText) {
      this.el.nativeElement.innerHTML = this.fullText;
      return;
    }

    // Create a regular expression to find all instances of the search text, case-insensitive
    const regex = new RegExp(`(${this.appHighlight})`, 'gi');
    const highlightedText = this.fullText.replace(regex, `<span style="background-color:yellow"class="highlight">$1</span>`);
    
    // Render the highlighted HTML
    this.el.nativeElement.innerHTML = highlightedText;
  }
}
