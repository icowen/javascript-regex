import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegexExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    regexFunc(s) {
        this.setState({word: this.props.expr(s)});
    }

    render() {
        return (
            <div>
                <p>{this.props.language}</p>
                <div>
                    <code>{this.props.label}</code>
                </div>
                <input type={'text'} onChange={(e) => this.regexFunc(e.target.value)}/>
                <div>{this.state.word}</div>
            </div> );

    }
}

RegexExampleComponent.propTypes = {
    expr: PropTypes.func,
    label: PropTypes.string,
    language: PropTypes.string
};
export default RegexExampleComponent;