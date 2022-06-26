import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import userReducer from './Store/reducers/user';
import Home from './Pages/Home';
import "./App.css";

const store = createStore(userReducer);

const App = () => {
  return (
    
    <Provider store = {store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App