import React from "react";
import { useState } from "react";

const TotoForm = ({ onSubmit: onParentSubmit }) => {
    //props
    const [newTodo, setNewTodo] = useState("");

    const onChangeNewTodo = (e) => {
        setNewTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onParentSubmit(newTodo);
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={newTodo} onChange={onChangeNewTodo} />
            <button>추가</button>
        </form>
    );
};

export default TotoForm;
