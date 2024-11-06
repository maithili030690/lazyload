import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.scss']
})
export class LazyloadComponent implements OnInit {
  imageURL = 'https://example.com/your-image.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
