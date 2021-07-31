import Form from "./Form";
import TodoList from "./TodoList";
import Filter from "./Filter";

import {add, doneToggle, remove, edit, removeOneTodo} from "../store/todos";
import {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function OneToDo(props) {

    const {id} = props

    const [status, setStatus] = useState("All");

    const toDos = useSelector((state) => state.todos.items[id]);
    const dispatch = useDispatch();

    const filteredTodos = useMemo(() => {
        if (status === "completed") {
            return toDos.filter((todo) => todo.completed);
        }

        if (status === "uncompleted") {
            return toDos.filter((todo) => !todo.completed);
        }

        return toDos;
    }, [status, toDos]);


    return (
        <>
            <Form onValue={(content) => dispatch(add({text: content, todoNumb: id}))}>
                <Filter onStatusChange={setStatus} status={status}/>
                <button onClick={()=> dispatch(removeOneTodo(id))} className="remove"><i className="fas fa-window-close"/></button>
            </Form>

            <TodoList
                onDoneToggle={(taskID) => dispatch(doneToggle({id: taskID, todoNumb: id }))}
                onDelete={(taskID) => dispatch(remove({id: taskID, todoNumb: id }))}
                onEdit={(id, text) => dispatch(edit({id, text}))}
                filteredTodos={filteredTodos}
            />
        </>
    )
}