import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(

  ) { }

  Items = ['やること1','やること2','やること3']

  ngOnInit(): void {
  }

  public addTodo(todo: string) {
    this.Items.push(todo);
  }

  public removeTodo(todo: string) {
    let idx = -1;
    for (let i = 0; i < this.Items.length; i++) {
      if (this.Items[i] == todo) {
        idx = i;
      }
    }
    if (idx != -1) {
      this.Items.splice(idx,1);
    }
  }
}
