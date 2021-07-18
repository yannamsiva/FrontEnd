import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to Vsoft Innovative';

courses=["angular","springBootMicroServices","ReactJs"];

faculties=["shiva","sirisha","rani"];

clicked:any="ClickedMe";

handleForm()
{
  alert('welcome boss');
}

}
