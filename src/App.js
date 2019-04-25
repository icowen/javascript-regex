import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import IntroductionComponent from "./Components/IntroductionComponent";
import './App.css';
import NavBar from "./Components/NavBar";
import SyntaxComponent from "./Components/SyntaxComponent";
import ExamplesContainer from "./Components/Examples/ExamplesContainer";
import CustomComponent from "./Components/CustomComponent";
import HistoryComponent from "./Components/HistoryComponent";
import FlagsComponent from "./Components/FlagsComponent";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Router className={'App'}>
                    <NavBar />
                    <Switch>
                        <Route path={"/"} component={IntroductionComponent} exact={true}/>
                        <Route path={"/history"} component={HistoryComponent} exact={true}/>
                        <Route path={"/syntax"} component={SyntaxComponent} exact={true}/>
                        <Route path={"/flags"} component={FlagsComponent} exact={true}/>
                        <Route path={"/usage"} component={ExamplesContainer} exact={true}/>
                        <Route path={"/custom"} component={CustomComponent} exact={true}/>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
