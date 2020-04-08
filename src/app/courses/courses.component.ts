import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Array<Course> = [
    new Course('1', 'Test course 1', new Date().toDateString(), `1h 20m`, 'Some sort of descrioption'),
    new Course('2', 'Test course 2', new Date().toDateString(), `1h 20m`, 'Some sort of descrioption'),
    new Course('3', 'Test course 3', new Date().toDateString(), `1h 20m`, 'Some sort of descrioption'),
    new Course('4', 'Test course 4', new Date().toDateString(), `1h 20m`, 'Some sort of descrioption')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onCourseDeleted(courseId: string) {
    this.courses = this.courses.filter(course => course.id !== courseId);
  }

}
