import React, { Component } from 'react';

 import './App.css';

import axios from 'axios';

import Table from 'react-bootstrap/lib/Table';



class App extends Component {

  state = {

    top100Days: [],

    top100AllTime: []


  }

 
 getFCCData(url, stateName) {

  console.log(1);

  axios.get(url)
   .then(({ data }) => {

    this.setState({ [stateName]: data });
    console.log(this.state.top100Days);

    console.log(1);



   })
 }


 componentDidMount() {

  this.getFCCData('https://buttercup-island.glitch.me/latest', "top100Days");

  this.getFCCData('https://buttercup-island.glitch.me/latest', "top100AllTime");


 }




render() {

  return (

    <div className="App">

    <Table> Test </Table>


    </div>

    );
}



}

export default App;
