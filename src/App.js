import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {

  state = {
     /*persons: [
      {name: "charmaine", age: 36},
      {name: "micah", age: 10},
      {name: "roser", age: 37},
      {name: "eileen", age: 56}
    ]*/
    
   numbers: [1, 2, 3, 4, 5, 6, 7],
   currentNumber: ""

  }

  saveNumberHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      currentNumber: event.target.value
    })
  }

  addNumberHandler = () => {
    this.setState({
      numbers: [...this.state.numbers, this.state.currentNumber],
      currentNumber: ""
    })
  }

  render () {
    /*const individualPeople = this.state.persons.map ((person, index) => {
      return <Person name={person.name} age={person.age} key={index}/>
    }) */

    const eachNumber = this.state.numbers.map((number, index) => {
    return <li key={index}>{number}</li>
    })


    return (
    <div className="App">
      <ul>
        {eachNumber}
      </ul>
      <input type="number" onChange={this.saveNumberHandler} value={this.state.currentNumber} />
      <button onClick={this.addNumberHandler}>Add numbers with this button</button>
          
       </div> 

    )

  }

}


export default App;
