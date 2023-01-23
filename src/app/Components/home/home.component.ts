import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  router: any;
  gotoproducts(){
   console.log('Trying to update database ');
    setTimeout(()=>{
      console.log("Database is updated");
      this.router.navigate(['products'])
    },2000);
  }
  name = new FormControl('');  
}
