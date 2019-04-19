import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Introduction from "./Components/Introduction";
import './App.css';
import NavBar from "./Components/NavBar";
import RegexSyntaxTable from "./Components/RegexSyntaxTable";
import ExamplesContainer from "./Components/Examples/ExamplesContainer";
import CustomRegexComponent from "./Components/CustomRegexComponent";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Router className={'App'}>
                    <NavBar />
                    <Switch>
                        <Route path={"/"} component={Introduction} exact={true}/>
                        <Route path={"/history"} component={Introduction} exact={true}/>
                        <Route path={"/syntax"} component={RegexSyntaxTable} exact={true}/>
                        <Route path={"/usage"} component={ExamplesContainer} exact={true}/>
                        <Route path={"/custom"} component={CustomRegexComponent} exact={true}/>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
