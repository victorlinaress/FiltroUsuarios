import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

// Função que aplica todos os filtros
const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  // Aplica o filtro de nome
  filteredList = filterUsersListByName(filterOptions.name, usersList);

  // Aplica o filtro de status
  filteredList = filterUsersListStatus(filterOptions.status, filteredList);

  // Aplica o filtro de data
  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList; // Retorna a lista filtrada
};

export { filterUsersList };

// Método específico para filtrar a lista de usuários por data
const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined; // Verifica se as datas foram selecionadas

  if (DATE_NOT_SELECTED) {
    return usersList; // Se não foi selecionada a data, retorna a lista sem filtro
  }

  const checkDateInterval = (user: IUser) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate, // Filtra os usuários dentro do intervalo de datas
    });

  const listFiltered = usersList.filter(checkDateInterval); // Filtra a lista usando o intervalo de datas

  return listFiltered; // Retorna a lista filtrada por data
};

// Método para filtrar a lista de usuários pelo status (ativo ou inativo)
const filterUsersListStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined; // Verifica se o status foi selecionado

  if (STATUS_NOT_SELECTED) {
    return usersList; // Se o status não foi selecionado, retorna a lista sem filtro
  }

  // Filtra a lista de usuários com base no status
  const filteredList = usersList.filter((user) => user.ativo === status);

  return filteredList; // Retorna a lista filtrada por status
};

// Método específico para filtrar a lista de usuários pelo nome
const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPED = name === undefined; // Verifica se o nome foi digitado

  if (NAME_NOT_TYPED) {
    return usersList; // Se o nome não foi digitado, retorna a lista sem filtro
  }

  // Filtra a lista de usuários verificando se o nome digitado está contido no nome do usuário
  const filteredList = usersList.filter(
    (user) => user.nome.toLowerCase().includes(name.toLowerCase()) // Comparando nomes de forma case-insensitive
  );

  return filteredList; // Retorna a lista filtrada com base no nome digitado
};
