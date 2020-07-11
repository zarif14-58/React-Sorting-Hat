import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

class Second extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondOpt: "",
            firstOptSec: this.props.location.state.firstOpt
        }
        this.selectOptTwo = this.selectOptTwo.bind(this)
        this.selectOptOne = this.selectOptOne.bind(this)
        this.selectOptThree = this.selectOptThree.bind(this)
        this.selectOptFour = this.selectOptFour.bind(this)
    }

    selectOptOne(){
        this.setState({
            secondOpt: "Love"
        })
    }

    selectOptTwo(){
        this.setState({
            secondOpt: "Glory"
        })
    }

    selectOptThree(){
        this.setState({
            secondOpt: "Wisdom"
        })
    }

    selectOptFour(){
        this.setState({
            secondOpt: "Power"
        })
    }

    render(){
        console.log(this.state.secondOpt)
        console.log("it fricking worked " + this.state.firstOptSec)
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="header">If you could make a potion that would guarantee you one thing, what would it be? </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne}>Love</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo}>Glory</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree}>Wisdom</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour}>Power</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/third", state:{firstOpt: this.state.firstOptSec, secondOpt: this.state.secondOpt}}}><Button outline color="success">Next Question</Button></Link>
                </div> 
            </div>
        )

    }
}

export default Second