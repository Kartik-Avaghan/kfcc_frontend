import { Outlet } from 'react-router-dom'
import Nav from '../../components/User/Nav'

function UsersAuth() {

  return (
    <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 overflow-y-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

export default UsersAuth