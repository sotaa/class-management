import { Injectable } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { ILoginResult, AuthService } from '../modules/authentication/services/auth.service';
import { SchoolService } from '../modules/school-management/components/school/services/school.service';

@Injectable()
export class MenuService {

  constructor(private authService: AuthService) {}

  getMenuItems(ability: string) {
    const access = Object.assign({} , ROUTES.find(r => r.ability === ability));
   if (access.routes) {
    access.routes.forEach(r => {
      r.path = r.path.replace('{schoolPathWithId}' , 'school/' + this.authService.getCurrentUser().schoolId);
    });
  }
   return access ? access.routes : [];
  }

}
