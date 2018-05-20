

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {
  
  
  render() {
    return (
      <button className="square" onClick={()=>this.props.onClick()} >
        {this.props.value}
      </button>
    );
  }
}
{/* // {() => alert ('click')}> */ }
{/* //new thing here => alert('click') will create an alert for each click this was formerly located inside the button element of the square component*/}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = { squares: Array(9).fill(null),
      
    };
  }
// .slice below will copy the squares array instead of mutating the existing array

  handleClick(i) {
    const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
  }
// new thing here: Arra7(num).fill(withsomething)

  renderSquare(i) {
    //aha! the reason for the ( around the return statement is that otherwise if return is on a line on its own, javascript will insert a semicolon)
    return ( 
          <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}/>
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
