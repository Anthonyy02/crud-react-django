import {useEffect, useState} from 'react'
import {getAllTasks} from '../api/tasks.api'
import {TaskCard} from './TaskCard'


/*El useEfect se ejecuta a penas se cargue la pagina, el use llamara al loadTasks, el load llama a la funcion getAll que pide al back end y despues muestra la respuesta */

export function TasksList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks();
    }, []);
    

    return <div className='grid grid-cols-3 gap-3'>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
}
