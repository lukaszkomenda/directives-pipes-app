import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loremValue = 'lorem ipsum';
  public loremValue2 = 'LOREM IPSUM';
  public jsonObject = {
    propeties: 'lorem'
  };
  public currencyValue = 6;
  public birthday = Date.now();
  public isAutenticated = false;
  public persons: string[] = ['Adam Kowalski', 'Marcin Janiak', 'Robert Lewandowski'];
  public lorem = 'lorem-ipsum-blable';
}
