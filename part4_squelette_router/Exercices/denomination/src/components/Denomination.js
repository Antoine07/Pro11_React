import { Component } from "react";

const denomination = [1, 5, 10, 20, 50, 100, 200];

class Denomination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      tokens: [],
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
      message : ''
    });
  }

  calculTokens(amount) {
    const Denomination = [...denomination];
    Denomination.sort((a, b) => b - a);
    let q,
      tokens = [];
    for (const d of Denomination) {
      if (amount >= d) {
        q = Math.floor(amount / d);
        tokens.push({
          token: d,
          quantity: q,
        });

        amount = amount - q * d;
      }
    }

    return tokens;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { amount } = this.state;

    if (amount.trim() === "") {
      this.setState({
        message: "Attention vous devez donner un nombre",
      });

      return;
    }

    if (amount <= 0 || parseInt(amount) != amount) {
      this.setState({
        message: `Attention le nombre ${amount} n'est pas compatible avec le système`,
      });

      return;
    }

    this.setState({
      tokens: this.calculTokens(amount),
    });
  }

  render() {
    const { tokens, message } = this.state;
    return (
      <>
        <ul>
          {denomination.map((token, i) => (
            <li key={i}>{token}</li>
          ))}
        </ul>
        {message && (
          <p>{message}</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="amount" onChange={this.handleChange} />
          </div>
          <div>
            <button>Calcul</button>
          </div>
        </form>
        {tokens.length > 0 && (
          <ul>
            {tokens.map(({ token, quantity }, i) => (
              <li key={i}>
                Token : {token} quantity : {quantity}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Denomination;
