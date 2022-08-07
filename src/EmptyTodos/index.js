//src/EmptyTodos/index.js

import React from "react";
import searchValue from "../App";

function EmptyTodos() {
    return (
    <div className="crearTodo">
    <p>¡Crea tu primer TODO!</p>
    </div>
)
}
function EmptyTodosResults() {
    return (
    <div className="crearTodo">
    <p>¡no se encontro!</p>
    </div>
)
}
export{EmptyTodos};
export{EmptyTodosResults};
