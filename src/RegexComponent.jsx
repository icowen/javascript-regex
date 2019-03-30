import React, { Component } from 'react';

class RegexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            len: null,
            string: null
        }
    }

    lenFive(s) {
        this.setState({len: s.length, string: s});
    }

    render() {
        return (
          <div>
              <input type={'text'} onChange={(e) => this.lenFive(e.target.value)}/>
              <div>{`${this.state.len}\n${this.state.string}`}</div>
          </div> );

    }
}
export default RegexComponent;