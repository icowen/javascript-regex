import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RegexExampleComponent.css';

class RegexExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'Enter a word',
            filteredWord: 'Enter a word'
        }
    }

    regexFunc(s) {
        let filteredWord;
        if (s) {
            filteredWord = this.props.expr(s);

        } else {
            s = 'Enter a word';
            filteredWord = 'Enter a word';
        }
        this.setState({word: s, filteredWord: filteredWord});
    }

    render() {
        return (
            <div className={'regex-block'}>
                <p>{this.props.language}</p>
                <code>{this.props.label}</code>
                <input type={'text'} onChange={(e) => this.regexFunc(e.target.value)}/>
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