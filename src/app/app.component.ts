import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "";
  url = ""; 
  userName: string="";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz!"
    this.imgUrl = "../assets/BridgeLabz-2square.jpg";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event: any) {
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
  // onInput($event){
  //   console.log("In the Input tag", $event);

  // }
}
