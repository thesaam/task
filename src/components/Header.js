import { FaUserCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <h1><Link to="/"> LOGO </Link></h1>
      </div>
      <div className='icons'>
        <FaUserCircle style={{ width: '30px', height: '30px' }} />

        <FaBell style={{ width: '30px', height: '30px' }} />
      </div>
    </header>
  )
}

export default Header
