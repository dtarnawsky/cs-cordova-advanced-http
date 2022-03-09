import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from '../api.service';
import { CatFact } from '../cat-fact';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  catFacts: Array<CatFact>;
  constructor(private apiService: ApiService, private platform: Platform) {}

  async ngOnInit(): Promise<void> {
    await this.platform.ready();
    this.catFacts = await this.apiService.getFacts();
  }

}
