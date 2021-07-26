import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { TodoListComponent } from './components/TodoList/TodoList';
import { reducer, initialState, State, Action } from './reducer/reducer';
import { Todo, TodoList } from './type/Todo';

type contextType = { state: State, dispatch: React.Dispatch<Action> }
export const TodoContext = createContext({} as contextType)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <TodoListComponent />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
