import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Transfer from './components/Transfer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to="/signup" replace />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/transfer' element={<Transfer/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
