import React, { Component } from 'react';

 import './App.css';

import axios from 'axios';

// import Table from 'react-bootstrap/lib/Table';
import { Table } from 'react-bootstrap';

import { Image } from 'react-bootstrap';


class App extends Component {

  state = {

    top100Days: [],

    top100AllTime: [],
    current: true


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

 pointChange(value) {

  if(this.state.current !== value) {
    this.setState({current: value});


  }
 }


 componentDidMount() {

  this.getFCCData('https://fcctop100.herokuapp.com/api/fccusers/top/recent', "top100Days");

  this.getFCCData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', "top100AllTime");


 }




render() {

  const {top100Days, top100AllTime, current} = this.state;

  return (

    <div className="App container">

    <Table striped bordered condensed hover className="colorBlack"> 

    <thread>

    <tr>

    <th>#</th>

    <th>Camper Name</th>

    <th onClick={(event) => this.pointChange(true)}>Points in 30 Days</th>

    <th onClick={(event) => this.pointChange(false)}>All Time Points</th>

    </tr>

    </thread>

    <tbody>

     {current && (top100Days.maps((row, index) => (

      <tr key={row.username}>

      <td>{index + 1}</td>

      <td>{`https://www.freecodecamp.org/${row.username}`}</td>

      <Image src = {row.img} className="imgHeight" circle/> {row.username}

      <td>{row.recent}</td>

      <td>{row.alltime}</td>



      </tr>

     )
     ))}


     {current=== false && (top100AllTime.maps((row, index) => (

      <tr key={row.username}>

      <td>{index + 1}</td>

      <td>{`https://www.freecodecamp.org/${row.username}`}</td>

      <Image src = {row.img} className="imgHeight" circle/> {row.username}

      <td>{row.recent}</td>

      <td>{row.alltime}</td>



      </tr>

     )
     ))}


    </tbody>

    </Table>


    </div>

    );
}



}

export default App;
