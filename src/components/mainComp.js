import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Second from './SecondquestionComp'
import Third from './ThirdquestionComp'
import Fourth from './Fourthquestion'
import Fifth from './FifthquestionComp'
import First from './FirstquestionComp'
import Result from './ResultComp'

class Main extends Component {

    render(){
        return(
            <Switch>
                <Route exact path="/" component={First} />
                <Route exact path='/second' component={Second} />
                <Route exact path="/third" component={Third} />
                <Route exact path="/fourth" component={Fourth} />
                <Route exact path="/fifth" component={Fifth} />
                <Route exact path="/result" component={Result} />
            </Switch>
        )
    }
}

export default Main