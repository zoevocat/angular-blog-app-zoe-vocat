import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgStyle } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    NgClass,
    NgStyle,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-app';
  cards = [
    { title: 'Blogbeitrag 1', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 2', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 3', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 4', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 5', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 6', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 7', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 8', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 9', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 10', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 11', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 12', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 13', content: 'Blablabla', tag: 'Garden' },
    { title: 'Blogbeitrag 14', content: 'Blablabla', tag: 'House' },
    { title: 'Blogbeitrag 15', content: 'Blablabla', tag: 'Garden' },
  ];

  selectedTag: string | null = null; // null = kein Filter

  searchText = '';

  selectTag(tag: string) {
    if (this.selectedTag === tag) {
      // Klick auf den aktiven Button hebt Filter auf
      this.selectedTag = null;
    } else {
      // Anderen Filter aktivieren
      this.selectedTag = tag;
    }
  }

  get filteredCards() {
    return this.cards.filter((card) => {
      const matchesTag = !this.selectedTag || card.tag === this.selectedTag;
      const matchesTitle = card.title
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      return matchesTag && matchesTitle;
    });
  }
}
