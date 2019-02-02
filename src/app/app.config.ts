import {IAppConfig} from './models/app-config.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {
  static settings: IAppConfig;

  constructor(private http: HttpClient) {}

  load() {
    const jsonFile = `assets/config/config.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        AppConfig.settings = <IAppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': '${JSON.stringify(response)}'`);
      });
    });
  }

  getUrl() {
    return AppConfig.settings.API_URL;
  }

  getPictureUrl() {
    return AppConfig.settings.PICTURE_URL;
  }
}
