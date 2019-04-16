import React, { Component } from 'react';
import './Introduction.css'
import RegexSyntaxTable from "./RegexSyntaxTable";

class Introduction extends Component {
    render() {
        return (
            <div className={'Introduction'}>
                <div className={'intro'}>
                    <header>{'JavaScript Regular Expressions (RegEx)'}</header>
                    <p> This website is designed to show basic JavaScript RegEx for matching
                        strings, and filtering strings.</p>
                    <p>JavaScript RegEx is contained between two backslashes <code>/I am regex/</code> or
                        by using the constructor <code>new RegExp("I am regex")</code>.</p>
                    <p>You can use the <code>yourRegex.test("any string")</code> method which returns true if the string
                        matches the regular expression in at least one spot.</p>
                    <p>The <code>string.replace(regex, "new string")</code> replaces
                        the matched regular expression with the new string.</p>
                </div>
                <RegexSyntaxTable/>
            </div> );

    }
}

export default Introduction;