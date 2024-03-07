import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'


export function TaskFormPage() {

    const {register, handleSubmit, formState: {
        errors},
        setValue
    } = useForm();
    const navigate = useNavigate() /*Aqui se llama al navigate para que nos mande a la pagina de inicio*/
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if(params.id) {
            await updateTask(params.id, data)
            toast.success('Tarea actualizada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
            //updateTask()
        } else {
            await createTask(data)
            toast.success('Tarea creada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate('/tasks') /*Una vez guardada la tarea nos manda a la pagina de inicio*/
    })


    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const res = await getTask(params.id);
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }
        loadTask()
    }, []);


    return (
        <div className='max-w-xl mx-auto'>

        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Titulo" {...register("title", {required: true} )} className='bg-zinc-500 p-3 rounded-lg block w-full mb-3' />
            {errors.title && <span>El titulo es requerido.</span> }
            <textarea rows="3" placeholder="Descripcion" {...register("description", {required: true} )} className='bg-zinc-500 p-3 rounded-lg block w-full mb-3' ></textarea>
            {errors.description && <span>La descripcion es requerida.</span> }
            <button className='bg-green-600 p-3 rounded-lg block w-full mt-3'>Guardar</button>
        </form>


        {/*Este es el codigo para eliminar por id */}
        { params.id && <button className='bg-red-600 p-3 rounded-lg block w-full mt-3' 
        onClick={async() => {
            const aceptado = window.confirm('Estas seguro?')
            if (aceptado) {
                await deleteTask(params.id)
                toast.success('Tarea eliminada', {
                    position: "bottom-right",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                })
                navigate('/tasks')
            } 
        }}>Eliminar</button> }
        
        </div>
    )
}

