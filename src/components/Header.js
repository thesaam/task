import { FaCross } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <FaCross style={{ height: '25px', padding: '', border: '2px solid #26abff', textAlign: 'center'}} />
        <h1> ribbon</h1>
      </div>
      <div className='icons'>
        <FaUserCircle style={{ width: '30px', height: '30px' }} />

        <FaBell style={{ width: '30px', height: '30px' }} />
      </div>
    </header>
  )
}

export default Header
