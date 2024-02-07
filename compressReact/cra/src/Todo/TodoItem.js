import React from "react";

const TodoItem = ({ item, index, setTodo }) => {
    const onChange = (e) => {
        setTodo((prevTodo) => {
            const nextTodo = [...prevTodo];
            nextTodo[index] = { ...nextTodo[index] }; //데이터 불변성을 위해서 이렇게 해야한다.
            nextTodo[index].completed = e.target.checked;
            // prevTodo[index] === nextTodo[index] false 가 나와야한다
            return nextTodo;
        });
    };
    return (
        <div>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={onChange}
            />
            {item.title}
        </div>
    );
};

export default TodoItem;
