import {
  ADD_LIST,
  DELETE_DATA,
  EDIT_LIST,
  ADD_TODO_IN_LIST,
  EDIT_TODO_LIST,
  DELETE_TODO,
} from "../constants/ACTIONTYPES";

export const deleteData = (listID) => {
  return {
    type: DELETE_DATA,
    data: { listID: listID },
  };
};

export const editList = (listID, listName, listDate) => {
  return {
    type: EDIT_LIST,
    data: {
      listID: listID,
      listName: listName,
      listDate: listDate,
    },
  };
};

export const addList = (listID, listName, listDate) => {
  return {
    type: ADD_LIST,
    data: {
      listID: listID,
      listName: listName,
      listDate: listDate,
      listTodos: [],
    },
  };
};

export const addTodoInList = (listID, todoID, todoTitle, todoDate) => {
  return {
    type: ADD_TODO_IN_LIST,
    data: {
      selectedListID: listID,
      newTodo: {
        todoID: todoID,
        todoTitle: todoTitle,
        todoDate: todoDate,
      },
    },
  };
};
export const editTodoInList = (listID, todoID, todoTitle, todoDate) => {
  return {
    type: EDIT_TODO_LIST,
    data: {
      selectedListID: listID,
      editTodo: {
        todoID: todoID,
        todoTitle: todoTitle,
        todoDate: todoDate,
      },
    },
  };
};

export const deleteTodo = (listID,todoID) => {
  return {
    type: DELETE_TODO,
    data: {
      listID: listID,
      todoID: todoID,
    },
  };
};
