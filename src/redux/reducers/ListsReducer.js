const INITIAL_STATE = {
  allListNames: [{ id: 123123123, title: "ListTest", date: 42342343 }],
};

export const ListsReducer = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case "ADD_LIST":
      console.log(data);
      return {
        ...state,
        allListNames: [...state.allListNames, data],
      };

    case "EDIT_LIST":
      console.log(data);
      return {
        ...state,
        allListNames: [state.allListNames.map(each => each.id === data.id ? { ...data } : each
        )]
      };

    default:
      return state;
  }
};
