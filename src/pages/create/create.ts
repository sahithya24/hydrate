import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../services';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  editing = false;
  public event = {
    month: '1990-02-19',
    timeStarts: '07:45',
    timeEnds: '1990-02-20',
    todo: ''
  }

  addTodo(event) {
    if (this.editing) {
      console.log('Hi');
    } else {
      this.todoService.arr.push(event);
      console.log(event);
      this.navCtrl.push(HomePage);
    }

  }

  cancel(event) {
    this.navCtrl.push(HomePage);
  }

  constructor(public navCtrl: NavController, public todoService: TodoService, private navParams: NavParams) {
    console.log(this.navParams);
    this.event = this.navParams.data.data1;
    this.editing = this.navParams.data.data2;

  }

}
