import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {StudentModel} from '../../model/student.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  students: StudentModel[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(
      value => this.students = value
    );
  }

}
