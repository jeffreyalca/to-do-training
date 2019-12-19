import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import {IAppState} from '../../core/redux/models/store';
import {ITodo} from '../../core/redux/models/todo';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../../core/redux/actions/todo.actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
  }
  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }
  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }
  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }
}
