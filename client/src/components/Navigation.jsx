import {Link} from 'react-router-dom'


export function Navigation() {
    return (
        <div className='flex justify-between py-3'>
            <Link to='/tasks'>
                <h1 className='font-bold text-3xl mb-4'>Tasks App</h1>
            </Link>
            
            
                <Link className='bg-red-900 py-2 rounded-lg' to="/tasks-create">create task</Link>
            
            
        </div>
    )
}




