import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomRegexComponent.css';

class CustomRegexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'Enter a string',
            regex: null,
            accepted: 'REJECT'
        }
    }

    onSubmit(r) {
        let regex;
        let accepted;
        try {
            regex = new RegExp(r);
            accepted = regex.test(this.state.word) ? 'ACCEPT' : 'REJECT';
        } catch(e) {
            console.log(e);
            regex = 'Invalid regex! Enter new regex!'
        }
        this.setState({regex: regex, accepted: accepted});
    }

    onChange(e) {
        let accepted = 'REJECT';
        if(this.state.regex && this.state.regex.test(e)) {
            accepted = 'ACCEPT';
        }
        this.setState({accepted: accepted, word: e});
    }

    render() {
        return (
            <div className={'regex-block'}>
                <p>{'Create your own regex using JavaScript!'}</p>
                <div className={'regex-input'}>
                    <p>{'REGEX: '}</p>
                    <input type={'text'} onChange={(e) => this.onSubmit(e.target.value)} placeholder={'Enter regex'}/>
                </div>
                <code>{this.state.regex && this.state.regex.toString()}</code>
                <div className={'regex-input'}>
                    <p>{'Test string: '}</p>
                    <input type={'text'} onChange={(e) => this.onChange(e.target.value)} placeholder={'Enter string to test regex'}/>
                </div>
                <div className={this.state.accepted}>{this.state.accepted}</div>
            </div> );

    }
}

CustomRegexComponent.propTypes = {
    expr: PropTypes.func,
    label: PropTypes.string,
    language: PropTypes.string
};
export default CustomRegexComponent;