import React, { Component } from 'react';

class HistoryComponent extends Component {
    render() {
        return <div className={'history'}>
            <h2>History of Regex</h2>
            <h3>First Regular Expressions</h3>
            <p>Stephen Cole Kleene was credited with defining regular expressions in 1951.
                In the late 1960’s Ken Thompson, who worked at Bell Labs, wrote regular expressions into the editor QED.
                The QED editor did not have all the capabilities that regex has now, such as backreference and lookaheads (Ritchie and Thompson).

                <h3>Regular Expressions in Compiliers</h3>
                Regular expressions later made it into Unix programs.
                The common Unix command “grep” was a result of early use of regular expressions for searching text files.
                Grep stands for “search Globally for Regular Expressions and Print.”
                From there regular expressions were mainly used for pattern matching in text files and in compilers.
                Perl was one of the first programming languages that implemented complicated regular expressions.

                <h3>Regular Expressions in Programming Languages</h3>
                Today, many programming languages have regular expressions built in or have a regular expression library.
                JavaScript has RegExp objects that create a pattern which can match strings. These objects also have different methods for using the regex.

                <h3>Regular Expressions vs Regex</h3>
                In JavaScript, like most other programming languages, RegExp objects are more powerful than the class of regular languages because RegExp can match more than just regular languages.
                The discrepancy between programming language regular expressions and actual regular expressions has caused some confusion.
                That is why most programming languages refer to their “regular expressions” as regex, RegEx, RegExp, or just patterns.
            </p>
        </div>;

    }
}

export default HistoryComponent;