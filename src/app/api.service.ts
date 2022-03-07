import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Platform } from '@ionic/angular';
import { CatFact } from './cat-fact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private platform: Platform,
    private http: HTTP, // This is for native http calls on iOS and Android
    private webHttp: HttpClient // This is used for web http calls
  ) {
    this.reportPlatforms();
  }

  private async reportPlatforms() {
    await this.platform.ready();
    console.log(this.platform.platforms());
  }
  public async getFacts(): Promise<Array<CatFact>> {
    const data = await this.get('https://cat-fact.herokuapp.com/facts');
    console.log(data);
    return data;
  }

  private async get(url: string): Promise<any> {
    if (this.platform.is('hybrid')) {
      console.log('Using native http to get ' + url);
      const response = await this.http.get(url, undefined, undefined);
      return JSON.parse(response.data); // We json parse this
    } else {
      console.log('Using angular http to get ' + url);
      return await this.webHttp.get(url).toPromise();
    }
  }
}
