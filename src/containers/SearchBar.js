import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleClick = e => {
    return this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleClick} value={this.state.searchTerm} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchBar
