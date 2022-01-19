import { EDIT_LIST, ADD_LIST, DELETE_DATA, ADD_TODO_IN_LIST, EDIT_TODO_LIST,DELETE_TODO } from '../constants/ACTIONTYPES'

export const ListsReducer = (state = [], { type, data }) => {
  switch (type) {
    case ADD_LIST:
      return [...state, { ...data }];

    case EDIT_LIST:
     let updateListTodos = state.find(each => each.listID == data.listID)
      let updatedState = state.map((each) =>
        each.listID == data.listID ? {...data,listTodos: updateListTodos.listTodos} : each
      );
      return updatedState;

    case DELETE_DATA:
      let popedData = state.filter((each) => each.listID !== data.listID);
      return popedData;

    case ADD_TODO_IN_LIST:
      return state.map((each) =>
        each.listID == data.selectedListID
          ? { ...each, listTodos: [...each.listTodos, data.newTodo] }
          : each
      );

    case EDIT_TODO_LIST:
      let selectedUpdatedData = state.find(
        (each) => each.listID == data.selectedListID
      );
      let updatedData = {
        ...selectedUpdatedData,
        listTodos: (selectedUpdatedData.listTodos.map(each => each.todoID == data.editTodo.todoID ? data.editTodo : each ))
      };
      return  state.map(each => each.listID == data.selectedListID ? updatedData : each)

    case DELETE_TODO:
      let specificList = state.find(each => each.listID == data.listID)
      let deleteTodo = specificList.listTodos.filter(each => each.todoID != data.todoID)
      return state.map(each => each.listID == data.listID ? {...each,listTodos: deleteTodo} : each)

    default:
      return state;
  }
};
