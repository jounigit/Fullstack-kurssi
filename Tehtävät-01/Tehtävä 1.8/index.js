import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = (props) => <span>{props.text} {props.tila}</span>

const  Statistics = (props) => {
  return (
    <div>
      <Statistic  text='hyvä' tila={props.tila.hyva} /><br />
      <Statistic  text='neutraali' tila={props.tila.neutraali} /><br />
      <Statistic  text='huono' tila={props.tila.huono} /><br />
      <Statistic  text='keskiarvo' tila={props.tila.keskiarvo} /><br />
      <Statistic  text='positiivisia' tila={props.tila.positiivisia} /> %<br />
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

  asetaKeskiarvo = (hyva, neutraali, huono) => {
    const x = ((hyva * 1) + (neutraali * 0) - (huono * 1)) / 3
    this.setState({ keskiarvo: x.toFixed(1) })
  }

  asetaPositiivisia = (hyva, neutraali, huono) => {
    const x = (hyva * 100) / (hyva + neutraali + huono)
    this.setState({ positiivisia: x.toFixed(1) })
  }

  asetaHyva = () => this.setState({ hyva: this.state.hyva + 1 })
  asetaNeutraali = () => this.setState({ neutraali: this.state.neutraali + 1 })
  asetaHuono = () => this.setState({ huono: this.state.huono + 1 })


  klikHyva = () => {
    this.asetaHyva()
    this.asetaKeskiarvo((this.state.hyva + 1), this.state.neutraali, this.state.huono)
    this.asetaPositiivisia((this.state.hyva + 1), this.state.neutraali, this.state.huono)
  }
  klikNeutraali = () => {
     this.asetaNeutraali()
     this.asetaKeskiarvo(this.state.hyva, (this.state.neutraali + 1), this.state.huono)
     this.asetaPositiivisia(this.state.hyva, (this.state.neutraali + 1), this.state.huono)
    }
  klikHuono = () => {
     this.asetaHuono()
     this.asetaKeskiarvo(this.state.hyva, this.state.neutraali, (this.state.huono + 1))
     this.asetaPositiivisia(this.state.hyva, this.state.neutraali, (this.state.huono + 1))
    }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <Button handleClick={this.klikHyva} text="Hyvä" />
        <Button handleClick={this.klikNeutraali} text="Neutraali" />
        <Button handleClick={this.klikHuono} text="Huono" />

      <h2>statistiikka</h2>
      <Statistics tila={this.state} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
