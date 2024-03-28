import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-drag-drop';

  sidenavOpen = true;

  addBoard() {
    console.log(' open dialog to Add board');
  }

  helpinfo() {
    console.log(' open dialog to help info');
  }
}
