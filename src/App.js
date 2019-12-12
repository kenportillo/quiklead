import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';
import Layout from './Components/Layout';
import NavBar from './Components/NavBar'



class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Router>
        <NavBar/>
          <Layout>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                  <Route component={NoMatch}/>
                </Switch>
          </Layout>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }