import "./App.css";
import OneToDo from './components/OneToDo';
import {useDispatch, useSelector} from 'react-redux';
import {addOneTodo} from './store/todos'


function App() {

    const allToDos = useSelector(state => state.todos.items)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <header>
                <h1>Best ToDo</h1>
                <button onClick={() => dispatch(addOneTodo(Date.now()))} className="remove">
                    <i className="fas fa-plus-square"/>
                </button>
            </header>
            {Object.keys(allToDos).map(x => <OneToDo key={x} id={x}/>)}

        </div>
    );
}

export default App;
