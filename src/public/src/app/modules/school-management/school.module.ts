import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolListComponent } from './components/school/school-list/school-list.component';
import { SchoolCreateComponent } from './components/school/school-create/school-create.component';
import { SchoolStartComponent } from './components/school/school-start/school-start.component';
import { SchoolRoutingModule } from './components/school/school-routing/school-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActiveStatusPipe } from '../users/pipes/active-status.pipe';
import { PersonStartComponent } from './components/person/person-start/person-start.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { StudentStartComponent } from './components/school/student/student-start/student-start.component';
import { StudentCreateComponent } from './components/school/student/student-create/student-create.component';
import { StudentListComponent } from './components/school/student/student-list/student-list.component';
import { PersonnelStartComponent } from './components/school/personnel/personnel-start/personnel-start.component';
import { PersonnelCreateComponent } from './components/school/personnel/personnel-create/personnel-create.component';
import { PersonnelListComponent } from './components/school/personnel/personnel-list/personnel-list.component';
import { NgSelect2Module } from 'ng-select2';
import { GradesListComponent } from './components/school/grades/grades-list/grades-list.component';
import { GradesCreateComponent } from './components/school/grades/grades-create/grades-create.component';
import { GradesStartComponent } from './components/school/grades/grades-start/grades-start.component';
import { ClassStartComponent } from './components/school/class/class-start/class-start.component';
import { ClassListComponent } from './components/school/class/class-list/class-list.component';
import { ClassCreateComponent } from './components/school/class/class-create/class-create.component';
import { SearchComponent } from './components/person/search/search.component';
import { PeriodComponent } from './components/school/period/period.component';
import { PeriodCreateComponent } from './components/school/period/period-create/period-create.component';
import { PeriodListComponent } from './components/school/period/period-list/period-list.component';
<<<<<<< HEAD
import { SchoolDashboardComponent } from './components/school/school-dashboard/school-dashboard.component';
import { StudentStatusComponent } from './component/school/class/student-status/student-status/student-status.component';
=======
import { ManageStudentsComponent } from './components/school/class/manage-students/manage-students.component';
>>>>>>> 6eae5f4a211c27833bad7d5d34a52c77a5101977

@NgModule({
  declarations: [
    SchoolListComponent,
    SchoolCreateComponent,
    SchoolStartComponent,
    ActiveStatusPipe,
    PersonStartComponent,
    PersonCreateComponent,
    PersonListComponent,
    StudentStartComponent,
    StudentCreateComponent,
    StudentListComponent,
    PersonnelStartComponent,
    PersonnelCreateComponent,
    PersonnelListComponent,
    GradesListComponent,
    GradesCreateComponent,
    GradesStartComponent,
    ClassStartComponent,
    ClassListComponent,
    ClassCreateComponent,
    SearchComponent,
    PeriodComponent,
    PeriodCreateComponent,
    PeriodListComponent,
<<<<<<< HEAD
    SchoolDashboardComponent,
    StudentStatusComponent,
=======
    ManageStudentsComponent,
>>>>>>> 6eae5f4a211c27833bad7d5d34a52c77a5101977
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ],
  exports: [ActiveStatusPipe, PeriodComponent]
})
export class SchoolManagementModule {}
