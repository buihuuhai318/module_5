import React, {useState} from "react";

function ToDoList() {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    const handleChange = (event) => {
        setItem(event.target.value);
    }

    const handleAddItem = () => {
        if (item.trim() !== '') {
            setList([...list, item]);
            setItem('');
        }
    }
    return (
        <div style={{width: '20%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
            <h1>Todo List</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter a task" aria-label="Recipient's username"
                       aria-describedby="button-addon2" value={item}
                       onChange={handleChange}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                        onClick={handleAddItem}>Add
                </button>
            </div>
            <ul>
                {list.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;