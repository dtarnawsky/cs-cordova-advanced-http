import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CatFact } from '../cat-fact';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  catFacts: Array<CatFact>;
  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.catFacts = await this.apiService.getFacts();
  }

}
