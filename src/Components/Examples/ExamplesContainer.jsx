import React, { Component } from 'react';
import RegexMatchingComponent from "./RegexMatchingComponent";
import RegexExampleComponent from "./RegexExampleComponent";

class ExamplesContainer extends Component {
    stringOfLengthAtLeastFive(s) {
        let re = /\w{5}/;
        return re.test(s);
    }

    stringOfLengthExactlyFive(s) {
        let re = /^\w{5}$/;
        return re.test(s);
    }

    validEmailAddress(s) {
        let re = /^\w+@\w+[.-]\w+$/;
        return re.test(s);
    }

    onlyLettersAndNumbers(s) {
        let re = /[^0-9a-zA-Z]*/g;
        return s.replace(re, '');
    }

    duplicateWords(s) {
        let re = /\b(\w+)\b(?=.*\1)/;
        return re.test(s);
    }

    validPassword(s) {
        let re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return re.test(s);
    }

    render() {
        let sigma = '\u03A3';
        let union = '\u222A';
        let elementOf = '\u2208';
        let notElementOf = '\u2209';
        let plus = '\u207A';
        let dupWordLang = `L = { (${sigma} ${union} x)* w (${sigma} ${union} x)* x${plus} w (${sigma} ${union} x)* | w ${elementOf} ${sigma} and x ${notElementOf} ${sigma} } \n Strings with a substring duplicated and separated by a non-alphanumeric character`;
        let lettersAndNumbers = `L = {w | w ${elementOf} ${sigma}* where ${sigma} = {0-9 ${union} a-z ${union} A-Z } } \n Filters strings and removes non-alphanumeric characters`;
        let validPassword = 'L = {w | w has a lowercase and uppercase letter, a number and |w| > 7} \nAccepts valid passwords';
        return (
            <div className="regex">
                <h2>{'Basic Regex Examples'}</h2>
                <RegexMatchingComponent expr={this.stringOfLengthAtLeastFive}
                                        language={'L = {w | w is at least length 5}'}
                                        label={'/\\w{5}/'}/>
                <RegexMatchingComponent expr={this.stringOfLengthExactlyFive}
                                        language={'L = {w | w has length exactly 5}'}
                                        label={'/^\\w{5}$/'}/>
                <RegexMatchingComponent expr={this.validEmailAddress}
                                        language={'L = {w | w is a valid email address}'}
                                        label={'/\\w\u207A@\\w\u207A.\\w\u207A/'}/>
                <RegexMatchingComponent expr={this.duplicateWords}
                                        language={dupWordLang}
                                        label={'/\\b(\\w+)\\b(?=.*\\1)/'}/>
                <RegexMatchingComponent expr={this.validPassword}
                                        language={validPassword}
                                        label={'/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/'}/>
                <RegexExampleComponent expr={this.onlyLettersAndNumbers}
                                       language={lettersAndNumbers}
                                       label={'[^0-9a-zA-Z]*'}/>
            </div>
        );
    }
}
export default ExamplesContainer;