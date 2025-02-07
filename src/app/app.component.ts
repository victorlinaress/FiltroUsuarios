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
  usersList: IUser[] = []; //lista original
  userListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    }, 1); //simulaçao da chamada http lista original
  }

  onUserSelected(User: IUser) {
    this.userSelected = User;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {  // recebendo o objeto de filtro
    console.log(filterOptions);

    // executar a lógica de filtro e retornar a lista filtrada
    this.userListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];
    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    throw new Error('Method not implemented.');
  }
}
