import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = []; // Lista original de usuários
  userListFiltered: IUser[] = []; // Lista de usuários filtrados
  userSelected: IUser = {} as IUser; // Armazena o usuário selecionado
  showUserDetails: boolean = false; // Flag para exibir detalhes do usuário selecionado

  ngOnInit(): void {
    // Simulando a chamada HTTP para obter a lista de usuários
    setTimeout(() => {
      this.usersList = UsersList; // Atribuindo a lista de usuários ao componente
      this.userListFiltered = this.usersList; // Inicializando a lista filtrada com a lista original
    }, 1);
  }

  // Método chamado quando um usuário é selecionado
  onUserSelected(User: IUser) {
    this.userSelected = User; // Armazena o usuário selecionado
    this.showUserDetails = true; // Exibe os detalhes do usuário
  }

  // Método chamado para aplicar os filtros
  onFilter(filterOptions: IFilterOptions) {
    // Recebe o objeto de filtros do componente filho
    console.log(filterOptions);

    // Executa a lógica de filtro e retorna a lista filtrada
    this.userListFiltered = filterUsersList(filterOptions, this.usersList);
  }

}
