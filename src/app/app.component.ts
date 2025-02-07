import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 1);
  }

  onUserSelected(User: IUser) {
    this.userSelected = User;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {} //
}
