import React, { Component, useState } from 'react';
import './App.css';
import Icon from './components/icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';

const itemArray = new Array(9).fill("empty")

class App extends Component {
  render() {
    const [isCross, setIsCross] = useState(false)
    const [winMessage, setWinMessage] = useState("")

    const reloadGame = () => {
      // 
    }

    const checkIsWinner = () => {
      // 
    }

    const changeItem = (itemNumber) => {
      // 
    }

    return (
      <div className="App">
        <Icon/>
      </div>
    );
  }
}

export default App;
