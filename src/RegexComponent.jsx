import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RegexComponent.css'

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
          <div className={'regex-block'}>
              <p>{this.props.language}</p>
              <code>{this.props.label}</code>
              <input type={'text'} onChange={(e) => this.regexFunc(e.target.value)}/>
              <div className={this.state.accepted}>{accepted}</div>
          </div> );

    }
}

RegexComponent.propTypes = {
    expr: PropTypes.func,
    label: PropTypes.string,
    language: PropTypes.string
};
export default RegexComponent;