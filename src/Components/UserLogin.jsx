
import { FaReact } from 'react-icons/fa6'
import '../style.css'

const UserLogin = () => {
  return (
    <div className='login_container'>
        <div className='login_title'>
            <FaReact />
            <h1>Drop Chat</h1>
        </div>
        <div className='login_form'>
            <input type="text" placeholder='Enter a Unique Name' />
            <button>Login</button>
        </div>
    </div>
  )
}

export default UserLogin