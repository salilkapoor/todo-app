import React, { useState } from 'react';

import Input from '../../atoms/input';
import Button from '../../atoms/button';

import './AddTask.scss';

const AddTask = ({addTask}) => {
    const [task, setTask] = useState();

    const addTaskHandler = () => {
        addTask(task)
    }

    const setTaskHandler = (e) => {
        setTask(e.target.value)
    }

    return (
        <>
            <Input className="addtask__input" onChange={e=>setTaskHandler(e)}/>
            <Button className="addtask__button" onClick={addTaskHandler}>Add Task</Button>
        </>
    )
}

export default AddTask;