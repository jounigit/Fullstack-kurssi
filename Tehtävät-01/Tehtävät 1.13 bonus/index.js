import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: [0, 0, 0, 0, 0, 0]
    }
  }

  setPoints = (newValue) => () => {
    const newArr = [...this.state.points]
    newArr[newValue] += 1
    this.setState({points: newArr})
  }


  render() {
    console.dir(this.state.points)

    const setToValue = (newValue) => () => {
    this.setState({ selected: newValue})
    }

    const lotto = Math.floor(Math.random() * 6)
    console.log("Sattuma: ", lotto)
    return (
      <div>
        <h4>{this.props.anecdotes[this.state.selected]}</h4>
        <button onClick={this.setPoints(this.state.selected)}>vote</button>
        <button onClick={setToValue(lotto)}>next anecdote</button>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
