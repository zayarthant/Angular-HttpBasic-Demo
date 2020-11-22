import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  message: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getStaffMessage().subscribe(value => this.message = value);
  }

}
