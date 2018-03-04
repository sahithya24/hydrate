import { CreatePage } from './../create/create';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public todo: TodoService) {


  }
  createTodo(){
    console.log("Created")
    this.navCtrl.push(CreatePage)
  }

  editTodo(i) {
    // let index = this.todo.arr.indexOf(i);
    // this.todo.arr.splice(index, 1);
    this.navCtrl.push(CreatePage,{data1: i, data2: true});
  }

  deleteTodo(i){
    let index = this.todo.arr.indexOf(i);
    console.log(index);
    this.todo.arr.splice(index, 1);
  }

}
