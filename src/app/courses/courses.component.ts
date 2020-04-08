import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/models/course.model';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from './courses-item/dialogs/add-course/add-course.component';
import { EditCourseComponent } from './courses-item/dialogs/edit-course/edit-course.component';
import { DeleteCourseComponent } from './courses-item/dialogs/delete-course/delete-course.component';

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
  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  onCourseAdd(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '25rem',
      data: {
        title: '',
        description: '',
        duration: '',
        creationDate: new Date().toDateString()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCourseIndex = this.courses.length;
        this.courses = [...this.courses, { ...result, id: newCourseIndex }];
      }
    });
  }

  onCourseEdit(courseId: string): void {
    const selectedCourse = this.courses.find(course => course.id === courseId);
    const dialogRef = this.dialog.open(EditCourseComponent, {
      width: '25rem',
      data: {
        title: selectedCourse.title,
        description: selectedCourse.description,
        duration: selectedCourse.duration,
        creationDate: selectedCourse.creationDate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const selectedCourseIndex = this.courses.indexOf(selectedCourse);
        this.courses[selectedCourseIndex] = result;
      }
    });
  }

  onCourseDelete(courseId: string): void {
    const dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '25rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses = this.courses.filter(course => course.id !== courseId);
      }
    });
  }

}
