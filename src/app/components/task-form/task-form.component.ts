import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTaskEvent = new EventEmitter<string>();

  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.addTaskEvent.emit(this.newTask);
      this.newTask = '';
    }
  }
}
