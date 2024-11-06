import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]'
})
export class LazyloadDirective implements OnInit{
  @Input() appLazyLoadImage!: string;  // URL of the actual image
  @Input() placeholder: string = 'assets/placeholder.jpg';  // Default placeholder image

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // // Set the placeholder image initially
    // this.renderer.setAttribute(this.el.nativeElement, 'src', this.placeholder);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Load the actual image when it enters the viewport
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.appLazyLoadImage);
            observer.unobserve(this.el.nativeElement);  // Stop observing after loading
          }
        });
      });

      observer.observe(this.el.nativeElement);
    } else {
      // Fallback if IntersectionObserver is not available
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.appLazyLoadImage);
    }
  }
}
