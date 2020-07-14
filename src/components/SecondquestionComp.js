import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

class Second extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondOpt: "",
            firstOptSec: this.props.location.state.firstOpt,
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: false
        }
        this.selectOptTwo = this.selectOptTwo.bind(this)
        this.selectOptOne = this.selectOptOne.bind(this)
        this.selectOptThree = this.selectOptThree.bind(this)
        this.selectOptFour = this.selectOptFour.bind(this)
    }

    selectOptOne(){
        this.setState({
            secondOpt: "Love",
            firstOptCol: "#3399ff",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptTwo(){
        this.setState({
            secondOpt: "Glory",
            firstOptCol: "cyan",
            secondOptCol: "#3399ff",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptThree(){
        this.setState({
            secondOpt: "Wisdom",
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "#3399ff",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptFour(){
        this.setState({
            secondOpt: "Power",
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "#3399ff",
            btn: true
        })
    }

    render(){
        console.log(this.state.secondOpt)
        console.log("it fricking worked " + this.state.firstOptSec)
        let button
        if(this.state.btn){
            button = <Button color="success">Next Question</Button>
        }
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-sm-8">
                        <h2 className="header">If you could make a potion that would guarantee you one thing, what would it be? </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne} style={{backgroundColor: this.state.firstOptCol}}>Love</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo} style={{backgroundColor: this.state.secondOptCol}}>Glory</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree} style={{backgroundColor: this.state.thirdOptCol}}>Wisdom</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour} style={{backgroundColor: this.state.fourthOptCol}}>Power</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/third", state:{firstOpt: this.state.firstOptSec, secondOpt: this.state.secondOpt}}}>{button}</Link>
                </div> 
            </div>
        )

    }
}

export default Second