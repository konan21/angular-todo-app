import { Component } from '@angular/core';
import { Todo, TodoItem } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Todo();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem === '') { return; }
    this.model.items.push(new TodoItem(newItem, false));
  }
}
