import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomRegexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'Enter a string',
            regex: null,
            accepted: null
        }
    }

    onSubmit(r) {
        let regex;
        try {
            regex = new RegExp(r);
        } catch(e) {
            regex = e;
        }
        this.setState({regex: regex});
    }

    onChange(e) {
        let accepted = false;
        if(this.state.regex && this.state.regex.test(e)) {
            accepted = true;
        }
        this.setState({accepted: accepted});
    }

    render() {
        return (
            <div className={'regex-block'}>
                <p>{'Create your own regex using JavaScript!'}</p>
                <input type={'text'} onSubmit={(e) => this.onSubmit(e.target.value)} placeholder={'Enter regex'}/>
                <code>{this.state.regex && this.state.regex.toString()}</code>
                <input type={'text'} onChange={(e) => this.onChange(e.target.value)} placeholder={'Enter string to test regex'}/>
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