const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        todo(undefined, action),
        ...state
      ]
    case 'DELETE_TODO':
      let deletedIndex = state.findIndex((item) => item.id === action.id);
      state.splice(deletedIndex, 1)
      return [...state];
    case 'EDIT_TODO':
      let editIndex = state.findIndex((item) => item.id === action.newTodo.id);
      if (editIndex >= 0) {
        state[editIndex] = action.newTodo;
      }
      return [
        ...state
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos