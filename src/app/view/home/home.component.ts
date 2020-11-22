import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.publicMessage().subscribe(value => this.message = value);
  }

}
