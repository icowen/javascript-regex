import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegexExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'Enter a string',
            filteredWord: 'Enter a string',
        }
    }

    regexFunc(s) {
        let filteredWord;
        if(s) { 
            filteredWord = this.props.expr(s);
        } else {
            filteredWord = 'Enter a string';
            s = 'Enter a string';
        }
        this.setState({word: s, filteredWord: filteredWord});
    }

    render() {
        return (
            <div className={'regex-block'}>
                <p>{this.props.language}</p>
                <code>{this.props.label}</code>
                <input type={'text'}
                       onChange={(e) => this.regexFunc(e.target.value)}
                       placeholder={'Enter a string of characters'}/>
                <div>{this.state.word}</div>
                <div>{this.state.filteredWord}</div>
            </div> );

    }
}

RegexExampleComponent.propTypes = {
    expr: PropTypes.func,
    label: PropTypes.string,
    language: PropTypes.string
};
export default RegexExampleComponent;