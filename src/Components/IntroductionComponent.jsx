import React, { Component } from 'react';
import SyntaxComponent from "./SyntaxComponent";

class IntroductionComponent extends Component {
    render() {
        return (
            <div className={'Introduction'}>
                <div className={'intro'}>
                    <h2><b>JavaScript Regular Expressions (RegEx)</b></h2>
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
                <SyntaxComponent/>
            </div> );

    }
}

export default IntroductionComponent;