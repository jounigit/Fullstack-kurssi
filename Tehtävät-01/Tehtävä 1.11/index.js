import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = (props) => {
  if ((props.text) === 'positiivisia') {
    return (
      <tr><td>{props.text}</td><td>{props.tila} %</td></tr>
    )
  }
  return (
    <tr><td>{props.text}</td><td>{props.tila}</td></tr>
  )
}

const  Statistics = (props) => {
  if (props.tila.hyva === 0 && props.tila.neutraali === 0 && props.tila.huono === 0 ) {
    return (
      <div>
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  }
  return (
    <div>
      <table>
      <tbody>
        <Statistic  text='hyvä' tila={props.tila.hyva} />
        <Statistic  text='neutraali' tila={props.tila.neutraali} />
        <Statistic  text='huono' tila={props.tila.huono} />
        <Statistic  text='keskiarvo' tila={props.tila.keskiarvo} />
        <Statistic  text='positiivisia' tila={props.tila.positiivisia} />
        </tbody>
      </table>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0
    }
  }

  asetaTila = (hyva, neutraali, huono) => () => {
    const x = ((hyva * 1) + (neutraali * 0) - (huono * 1)) / 3
    const y = (hyva * 100) / (hyva + neutraali + huono)
    this.setState({
      hyva: hyva,
      neutraali: neutraali,
      huono: huono,
      keskiarvo: x.toFixed(1),
      positiivisia: y.toFixed(1)
    })
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <Button handleClick={this.asetaTila((this.state.hyva + 1), this.state.neutraali, this.state.huono)} text="Hyvä" />
        <Button handleClick={this.asetaTila(this.state.hyva, (this.state.neutraali + 1), this.state.huono)} text="Neutraali" />
        <Button handleClick={this.asetaTila(this.state.hyva, this.state.neutraali, (this.state.huono + 1))} text="Huono" />

      <h2>statistiikka</h2>
      <Statistics tila={this.state} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
