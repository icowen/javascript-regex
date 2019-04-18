import React, { Component } from 'react';
import './Introduction.css'
import RegexSyntaxTable from "./RegexSyntaxTable";

class Introduction extends Component {
    render() {
        return (
            <div className={'Introduction'}>
                <div className={'intro'}>
                    <header><b>JavaScript Regular Expressions (RegEx)</b></header>
                    <p> This website is designed to show basic JavaScript RegEx for matching
                        strings, and filtering strings.</p>
                    <p>JavaScript RegEx is contained between two backslashes or
                        by using the constructor.
                        <br/><i>Backslashes:</i> <code>/I am regex/</code>
                        <i>Constructor: </i><code>new RegExp("I am regex")</code></p>
                    <p>You can use the test method which returns true if the string
                        matches the regular expression in at least one spot:
                        <br/><code>yourRegex.test("any string")</code> </p>
                    <p>The replace method replaces the matched regular expression with the new string:
                        <br/><code>string.replace(regex, "new string")</code></p>
                </div>
                <RegexSyntaxTable/>
            </div> );

    }
}

export default Introduction;