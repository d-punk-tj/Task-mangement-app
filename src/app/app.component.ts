import { Component } from '@angular/core';
import { Task } from './models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultTask = [
  {title: "Task 1", completed: true},
  {title: "Task 2", completed: true},
  {title: "Task 3", completed: true},
  {title: "Task 4", completed: false},
  {title: "Task 5", completed: false},
  {title: "Task 6", completed: false},
  {title: "Task 7", completed: false}
]

  tasks: Task[] = this.defaultTask;
  filteredTasks: Task[] = this.defaultTask

  addTask(taskTitle: string) {
    const newTask: Task = { title: taskTitle, completed: false };
    this.tasks.push(newTask);
    this.applyFilter();
  }

  filterTasks(status: string) {
    if (status === 'all') {
      this.filteredTasks = [...this.tasks];
    } else if (status === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (status === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  private applyFilter() {
    this.filterTasks('all');
  }
}
