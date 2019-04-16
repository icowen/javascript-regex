import React, { Component } from 'react';
import './App.css';
import RegexMatchingComponent from "./RegexMatchingComponent";
import RegexExampleComponent from "./RegexExampleComponent";
import Introduction from "./Introduction";

class App extends Component {
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

    render() {
        let sigma = '\u03A3';
        let union = '\u222A';
        let elementOf = '\u2208';
        let notElementOf = '\u2209';
        let plus = '\u207A';
        let dupWordLang = `L = { (${sigma} ${union} x)* w (${sigma} ${union} x)* x${plus} w (${sigma} ${union} x)* | w ${elementOf} ${sigma} and x ${notElementOf} ${sigma} } \n Strings with a substring duplicated and separated by a non-alphanumeric character`;
        let lettersAndNumbers = `L = {w | w ${elementOf} ${sigma}* where ${sigma} = {0-9 ${union} a-z ${union} A-Z } } \n Filters strings and removes non-alphanumeric characters`;
        return (
            <div className="App">
                <Introduction/>
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
                <RegexExampleComponent expr={this.onlyLettersAndNumbers}
                                       language={lettersAndNumbers}
                                       label={'[^0-9a-zA-Z]*'}/>
            </div>
        );
    }
}

export default App;
