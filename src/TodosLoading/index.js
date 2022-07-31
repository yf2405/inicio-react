//src/TodosLoading/.index.js
import React from "react";
import './loading.css'
function TodosLoading() {
    return (
    
    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text">Cargando TODOs...</p>
    <span className="LoadingTodo-deleteIcon"></span>
  </div>
  
    )
}
export {TodosLoading};