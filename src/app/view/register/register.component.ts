import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ROLES, StudentModel} from '../../model/student.model';
import {ValidatorService} from '../../service/validator.service';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  roles = ROLES;

  constructor(private studentService: StudentService, private validatorService: ValidatorService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup({
        password: new FormControl(null),
        confirmPassword: new FormControl(null)
      }, [Validators.required, this.validatorService.confirmPasswordValidator]),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

  public summit(): void {
    const studentModel: StudentModel = {
      address: this.registerForm.value.address,
      email: this.registerForm.value.email,
      name: this.registerForm.value.name,
      phone: this.registerForm.value.phone,
      role: this.registerForm.value.role,
      password: this.registerForm.value.passwords.password
    };
    this.studentService.register(studentModel).subscribe(
      value => console.log(value),
      error => console.log(error)
    );
  }

}
