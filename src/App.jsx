import { Component } from 'react'
import './App.css'
import initialCars from "./cars.json"
import CarsList from './components/Cars/CarsList'


class App extends Component {

  state = {
    cars: initialCars
  }

handleDelete = (deleteId) => {
  this.setState((prev) => ({
    cars: prev.cars.filter((car) => car.id !== deleteId),
  }));
};


  render() {
    return (
      <>
 <CarsList list={this.state.cars} delete={this.handleDelete}/>
      </>
    )
  }
}

export default App