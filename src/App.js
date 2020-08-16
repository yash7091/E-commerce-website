import React,{useEffect} from 'react';
import './App.css';
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Checkout from './Checkout'
import Login from "./Login"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
function App() {
  const [{basket},dispatch] = useStateValue();
  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser)
      {
        console.log("User is >>>",authUser)

        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }
      else{
          dispatch({
            type:"SET_USER",
            user:null,
          })
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[]);
  return (    
    <Router>
      <div className="app">
    
          <Switch>
                <Route path= "/checkout">
                  <Header/>
                  <Checkout/>
                </Route>
                <Route path="/login">
                <Login/>
                </Route>
                <Route path="/">
                      <Header/>
                      <Home/>
                </Route>
          </Switch>
      </div>
    </Router>
  );
} 

export default App;
