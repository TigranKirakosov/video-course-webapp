import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  @Input() course: Course;
  @Output() courseDelete = new EventEmitter<string>();
  @Output() courseEdit = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onCourseEdit() {
    this.courseEdit.emit(this.course.id);
  }

  onCourseDelete() {
    this.courseDelete.emit(this.course.id);
  }

}
