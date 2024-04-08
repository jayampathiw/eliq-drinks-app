import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Configuration, initConfig } from '../model/configuration.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configSubject = new BehaviorSubject<Configuration>(initConfig);
  config$ = this.configSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  loadConfig() {
    return firstValueFrom(
      this.httpClient.get('./../../assets/config/config.json')
    )
      .then((config) => {
        this.updateStyle(config as Configuration);
        return this.configSubject.next(config as Configuration);
      })
      .catch((err) => console.error(err));
  }

  getBaseAPIUrl(): string {
    return this.configSubject.getValue()?.baseAPIUrl;
  }

  getAppTitle(): string {
    return this.configSubject.getValue()?.appTitle;
  }

  getLogoUrl(): string {
    return this.configSubject.getValue()?.logURL;
  }

  private updateStyle(config: Configuration): void {
    if (config?.style?.primaryColor)
      this.document.documentElement.style.setProperty(
        '--primary-color',
        config.style.primaryColor
      );
    if (config?.style?.secondaryColor)
      this.document.documentElement.style.setProperty(
        '--secondary-color',
        config.style.secondaryColor
      );
    if (config?.style?.backgroundColor)
      this.document.documentElement.style.setProperty(
        '--background-color',
        config.style.backgroundColor
      );
    if (config?.style?.textColor)
      this.document.documentElement.style.setProperty(
        '--text-color',
        config.style.textColor
      );
    if (config?.style?.borderColor)
      this.document.documentElement.style.setProperty(
        '--border-color',
        config.style.borderColor
      );
  }
}
