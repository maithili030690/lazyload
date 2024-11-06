import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-text',
  templateUrl: './highlight-text.component.html',
  styleUrls: ['./highlight-text.component.scss']
})
export class HighlightTextComponent implements OnInit {
  searchText: string = '';
  textContent: string = 'Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.Angular This is the text where the highlighted word should appear if it matches.';
  constructor() { }


  ngOnInit(): void {
  }

}
