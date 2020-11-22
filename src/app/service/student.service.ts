import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentModel} from '../model/student.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<StudentModel[]> {
    return this.httpClient.get<StudentModel[]>(environment.baseUrl + '/student');
  }

  public register(student: StudentModel): Observable<number>{
    return this.httpClient.post<number>(environment.baseUrl + '/student', student);
  }
}
