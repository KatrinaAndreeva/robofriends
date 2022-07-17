import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchInput from '../components/SearchInput';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
      )
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }


  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ?
      <h1> Loading ...</h1>
      : (
        <>
          <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Robo Friends</h1>
          <SearchInput searchChange={this.onSearchChange} />
          <Scroll>
            < Cardlist robots={filteredRobots} />
          </Scroll>
        </>
      )
  }
}

export default App;