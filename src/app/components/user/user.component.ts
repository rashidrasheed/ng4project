import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Posts;
  editMode:boolean = false;

  constructor(private dataService:DataService) {

   }

  ngOnInit() {
    this.name = "sublime";
    this.age = 50;
    this.email = "test@test.com";
    this.address = {
      street:"123 street",
      city:"123 city",
      state:"123 state"
    };

    this.hobbies = ['hobbies 1','hobbies 2'];

    this.dataService.getPosts().subscribe((response)=>{
      this.posts = response;
    });
    
  }

  clickMe(){
    alert();
  }

  addHobby(value){
    this.hobbies.unshift(value);
    return false;
  }

  deleteHobby(index){
    this.hobbies.splice(index,1);
  }

  editUser(){
    this.editMode = !this.editMode;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Posts{
  body:string,
  id:number,
  title:string,
  userId:number
}