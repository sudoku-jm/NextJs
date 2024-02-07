import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import TotoForm from "./Todo/TotoForm";
import TodoItem from "./Todo/TodoItem";

function App() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        console.log("todo?", todo); //어떤 값이 바뀌었는지 useEffect에서 확인
    }, [todo]);

    const onSubmit = (newTodo) => {
        console.log("onParentSubmit");
        const nextTodo = [
            ...todo,
            { title: newTodo, completed: false, id: Math.random() },
        ];
        setTodo(nextTodo);
    };

    return (
        <div className="App">
            <h3>TO DO</h3>
            {todo.length === 0 ? (
                <>
                    <div>할 일을 추가해보세요.</div>
                    <TotoForm onSubmit={onSubmit} />
                </>
            ) : (
                <>
                    {todo.map((t, i) => (
                        <TodoItem
                            key={t.id}
                            index={i}
                            item={t}
                            setTodo={setTodo}
                        />
                    ))}
                    <TotoForm onSubmit={onSubmit} />
                </>
            )}
        </div>
    );
}

export default App;
