import { useReducer, useCallback } from 'react'

const ADD_TASK = 'ADD_TASK'
const UPDATE_STATUS = 'UPDATE_STATUS'
const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = [{
    date: '2020-03-19T12:37:48.215Z',
    task: 'Buy grocery',
    status: 'completed'
}, {
    date: '2020-03-18T12:37:48.215Z',
    task: 'Buy planters',
    status: 'completed'
}, {
    date: '2020-03-20T12:37:48.215Z',
    task: 'Plan a hobby',
    status: 'pending'
}, {
    date: '2020-03-24T12:37:48.215Z',
    task: 'Plan a session',
    status: 'pending'
}, {
    date: '2020-03-25T12:37:48.215Z',
    task: 'Deliver a session',
    status: 'pending'
}]

const reducer = (currentState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const updatedState = [...currentState]
            updatedState.push(action.item)
            return updatedState;
        case UPDATE_STATUS:
            const newState = [...currentState]
            newState.map((item) => {
                const itemObj = item;
                if (itemObj.date === action.id) {
                    itemObj.status = 'completed'
                }
                return itemObj
            })
            return newState;
        case REMOVE_ITEM:
            const tempArr = [...currentState]
            const removedState = tempArr.filter(({ date }) => {
                return date !== action.id
            })
            return removedState;
        default:
            return currentState;
    }
}

const useToDoState = () => {
    const [toDoState, dispatch] = useReducer(reducer, initialState);

    const addTask = useCallback((task) => {
        const taskObj = {
            date: new Date().toISOString(),
            task,
            status: 'pending'
        }
        dispatch({ type: ADD_TASK, item: taskObj })
    }, []);

    const updateStatus = useCallback((id) => {
        dispatch({ type: UPDATE_STATUS, id })
    }, []);

    const removeItem = useCallback((id) => {
        dispatch({ type: REMOVE_ITEM, id })
    }, []);

    return {
        list: toDoState,
        addTask,
        updateStatus,
        removeItem
    }
}

export default useToDoState