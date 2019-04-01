import React, { Component } from 'react';
import './App.css';
import RegexComponent from "./RegexComponent";
import RegexExampleComponent from "./RegexExampleComponent";

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

    render() {
        return (
            <div className="App">
                <RegexComponent expr={this.stringOfLengthAtLeastFive}
                                language={'L = {w | w is at least length 5}'}
                                label={'/\\w{5}/'}/>
                <RegexComponent expr={this.stringOfLengthExactlyFive}
                                language={'L = {w | w has length 5}'}
                                label={'/^\\w{5}$/'}/>
                <RegexComponent expr={this.validEmailAddress}
                                language={'L = {w | w is a valid email address}'}
                                label={'/\\w+@\\w+.\\w+/'}/>
                <RegexExampleComponent expr={this.onlyLettersAndNumbers}
                                       language={'Only letters and numbers'}
                                       label={'[^0-9a-zA-Z]*'}/>
            </div>
        );
    }
}

export default App;
