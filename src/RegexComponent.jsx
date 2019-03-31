import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accepted: this.props.expr('') ? 'ACCEPT' : 'REJECT'
        }
    }

    regexFunc(s) {
        let accepted;
        this.props.expr(s) ? accepted = 'ACCEPT' : accepted = 'REJECT';
        this.setState({accepted: accepted});
    }

    render() {
        let {accepted} = this.state;
        return (
          <div>
              <p>{this.props.language}</p>
              <div>
                  <code>{this.props.label}</code>
              </div>
              <input type={'text'} onChange={(e) => this.regexFunc(e.target.value)}/>
              <div>{accepted}</div>
          </div> );

    }
}

RegexComponent.propTypes = {
    expr: PropTypes.func,
    label: PropTypes.string,
    language: PropTypes.string
};
export default RegexComponent;