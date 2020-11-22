import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  message: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.masterMessage().subscribe(value => this.message = value, error => this.message = 'No Permission!');
  }

}
