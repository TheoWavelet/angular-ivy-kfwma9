import { Component, inject, OnInit, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  search = ''

  appService = inject(AppService);

  ngOnInit(): void {
    this.appService.getGridData().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('error', error.message),
    });
  }
}
