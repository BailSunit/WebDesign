import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';

  pages = [];

  constructor(private wikipediService : WikipediaService) { }

  onTerm(e: any) {
    const term = e;
    this.wikipediService.search(term).subscribe((pages: any) => {
      this.pages = pages;
    })
  }
}
