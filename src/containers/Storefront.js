import React, { Component } from 'react'
import ResultsContainer from './ResultsContainer'
import SearchBar from './SearchBar'

class Storefront extends Component {
  render() {
    return (
      <div>
        Here is the storefront
        < SearchBar />
        < ResultsContainer />
      </div>
    )
  }
}

export default Storefront
