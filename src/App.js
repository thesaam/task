import Header from './components/Header'
import Wallet from './components/Wallet'
import Select from './components/Select'
import Button from './components/Button'
import Activity from './components/Activity'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Activitymain from './components/Activitymain'
import Walletmain from './components/Walletmain'
import Marketmain from './components/Marketmain'
import Earnmain from './components/Earnmain'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="container">
              <Switch>
                <Route exact path="/">
                  < Wallet />
                  < Select />
                  <Button />
                  <Activity />
                  <Menu />
                </Route>
                <Route path="/activitymain">
                  <Activitymain />
                </Route> 
                <Route path="/walletmain">
                  <Walletmain />
                </Route> 
                <Route path="/marketmain">
                  <Marketmain />
                </Route> 
                <Route path="/earnmain">
                  <Earnmain />
                </Route> 
              </Switch>
          </div>
      </div>
    </Router>
      
  );
}

export default App;
