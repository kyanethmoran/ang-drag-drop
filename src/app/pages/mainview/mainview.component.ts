import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
})
export class MainviewComponent implements OnInit {
  constructor() {}

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'some random idea',
      'This is another random idea',
      'build an awesome application',
    ]),
    new Column('Research', [
      'Lorem ipsum',
      'foo',
      'This was in the research column',
    ]),
    new Column('Todo', ['Get to work', 'Pick up groceries', 'Go home']),
    new Column('Done', ['Get up', 'Brush teeth', 'Take a shower']),
  ]);

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
