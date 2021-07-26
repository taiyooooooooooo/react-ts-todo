import React from 'react';
import { createContext } from 'react';
import { Todo, TodoList } from './TodoList';

export const TodoContext = createContext<Todo[]>([])

export const todoTest: Todo[] = [{
  id: 1,
  title: "テスト１",
  detail: "詳細",
  dueDate: new Date('2021-01-01').toDateString()
}]

function App() {
  return (
    <TodoContext.Provider value={todoTest}>
      <div className="App">
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
