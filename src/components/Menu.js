import { Link } from 'react-router-dom'

const Menu = () => {

  const handleClick = (e) => {
    console.log('Home');
  }

  const handleClick0 = (e) => {
    console.log('Activity');
  }

  const handleClick1 = (e) => {
    console.log('Wallet');
  }

  const handleClick2 = (e) => {
    console.log('Market');
  }

  const handleClick3 = (e) => {
    console.log('Earn');
  }
  

  return (
    <div className="menu">
      <div className="space"></div>
      <div className="line">
        <div className="menu-icon">
          <div className="menu-icons current">
            <Link onClick={handleClick} className="current" to="/"><i class="fas fa-home current"></i><br/>Home</Link>
          </div>
          <div className="menu-icons">
            <Link onClick={handleClick0} to="/activitymain"><i class="far fa-list-alt"></i><br/>Activity</Link>
          </div>
          <div className="menu-icons">
            <Link onClick={handleClick1} to="/walletmain"><i class="fas fa-wallet"></i><br/>Wallet</Link>
          </div>
          <div className="menu-icons">
            <Link onClick={handleClick2} to="/marketmain"><i class="fas fa-mail-bulk"></i><br/>Market</Link>
          </div>
          <div className="menu-icons">
            <Link onClick={handleClick3} to="/earnmain"><i class="fas fa-gift"></i><br/>Earn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
