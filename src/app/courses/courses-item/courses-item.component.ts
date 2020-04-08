import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  @Input('course-data') course: Course;
  @Output('course-deleted') courseDeleted = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onCourseDelete() {
    this.courseDeleted.emit(this.course.id);
  }

}
