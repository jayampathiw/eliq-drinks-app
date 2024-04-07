import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration, initConfig } from '../model/configuration.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configSubject = new BehaviorSubject<Configuration>(initConfig);
  config$ = this.configSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  loadConfig() {
    return firstValueFrom(
      this.httpClient.get('./../../assets/config/config.json')
    )
      .then((config) => {
        console.log(config);
        return this.configSubject.next(config as Configuration);
      })
      .catch((err) => console.error(err));
  }

  getBaseAPIUrl(): string {
    return this.configSubject.getValue()?.baseAPIUrl;
  }
}
