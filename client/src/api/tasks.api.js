import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => tasksApi.get('/')

export const getTask = (id) => tasksApi.get(`/${id}/`)

export const createTask = (task) => tasksApi.post('/', task) /*Se le manda la tarea por eso despues se pone TASK */

export const deleteTask = (id) => tasksApi.delete(`/${id}`)

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)
