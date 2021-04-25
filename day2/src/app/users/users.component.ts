import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { UserServicesServiceService } from '../sevice/user-services-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList:IUser[]=[];

  constructor(private userServices:UserServicesServiceService) { }
  errorMsg:string;
  ngOnInit(): void {
    this.userServices.returnAllUsers().subscribe(
      employeeData=>
      {
        this.userList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }

}
