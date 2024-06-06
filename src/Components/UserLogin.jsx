
import { FaReact } from 'react-icons/fa6'

const UserLogin = () => {
  return (
    <div>
        <div>
            <FaReact />
            <h1>Drop Chat</h1>
        </div>
        <div>
            <input type="text" placeholder='Enter a Unique Name' />
            <button>Login</button>
        </div>
    </div>
  )
}

export default UserLogin