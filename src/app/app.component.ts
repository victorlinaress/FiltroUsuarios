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

  onFilter(filterOptions: IFilterOptions) {
    // recebendo o objeto de filtro enviado pelo componente filho
    console.log(filterOptions);

    // executar a lógica de filtro e retornar a lista filtrada
    this.userListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  // método que executa todos os filtros e retorna a lista filtrada
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    //  aplicando o filtro pelo nome (
    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListStatus(
      filterOptions.status,
      filteredList
    );

    return filteredList; // retorna a lista filtrada
  }
  filterUsersListStatus(
    status: boolean | undefined,
    usersList: IUser[]
  ): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
  }

  // método específico para filtrar a lista de usuários pelo nome
  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    // verifica se o nome foi digitado ou não
    const NAME_NOT_TYPED = name === undefined;

    // se o nome não foi digitado, retorna a lista original sem filtro
    if (NAME_NOT_TYPED) {
      return usersList;
    }

    // fltra a lista de usuários verificando se o nome digitado está contido no nome do usuário
    const filteredList = usersList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList; // retorna a lista filtrada com base no nome digitado
  }
}
