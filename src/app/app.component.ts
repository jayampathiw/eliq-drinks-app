import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from './configuration/service/configuration.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = '';
  logURL: string = '';

  constructor(private configService: ConfigurationService) {}

  ngOnInit(): void {
    this.title = this.configService.getAppTitle();
    this.logURL = this.configService.getLogoUrl();
  }
}
