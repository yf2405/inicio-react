import React from 'react';
import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { EmptyTodosResults} from '../EmptyTodos';
import {ChangeAlertWithStorageListener } from '../ChangeAlert'; 



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    descompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos ,
    searchValue, 
    setSearchValue,
    addTodo, 
    sincronizeTodos,
  
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader>
      <TodoCounter  
      totalTodos={totalTodos}
      completedTodos ={completedTodos}
      />
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />
      </TodoHeader>

          <TodoList 
           onEmptySearchResults={(searchText) => (
          <p>No hay resultado para {searchText} </p>
        )}
          >
        
 

            {error && <TodosError/>}
            {loading && <TodosLoading/>}
            {(!totalTodos  && !totalTodos.length ) && <EmptyTodos/>}
            
            {(!!totalTodos && !searchedTodos.length) && <EmptyTodosResults/>}

        
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                noComplete={() => descompleteTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
     
          {!!openModal && (
        <Modal>
         <TodoForm 
         addTodo = {addTodo}
         setOpenModal = {setOpenModal}
         />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />  
      <ChangeAlertWithStorageListener
       sincronize = {sincronizeTodos}/>
    </React.Fragment>
  );

}
export default App;