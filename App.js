import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Root} from './components/Root'
import {Learning} from './components/Learning'
import {React} from './components/React'

import Button from 'React-bootstrap/Button'

function App() {
    return (
        <div className="container">
          <Root/>
          <Learning/>
          <React/>
        </div>
    );
}

export default App; 