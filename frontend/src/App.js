import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Profile from './components/Profile/Profile.js';
import Routines from './components/Routines/Routines.js';


class App extends React.Component {
  render() {
    return (
      
      
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet"></link>
        <Router>
        {/* Nav Bar */}
          <nav className='top-nav'>
            
              <a href='/'>
                <div classname='logo'></div>
              </a>

            <a href='/'>Home</a>
            <a href='/routines'>Routines</a>
            <a href='/profile'>Profile</a>
          </nav>

        {/*Profile*/}
        <Route path='/profile/:id' exact render={(props) => <Profile {...props} />}/>
        <Route path='/profile' exact render={(props) => <Profile />}/>

        {/*Routines*/}
        <Route path='/routines' exact render={(props) => <Routines {...props} />}/>
        
        {/* Footer */}
        <div className='footer'>

        </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
