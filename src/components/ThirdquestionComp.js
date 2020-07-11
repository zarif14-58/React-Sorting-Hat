import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

class Third extends Component {

    constructor(props){
        super(props)
        this.state = {
            thirdOpt: "",
            firstOptThird: this.props.location.state.firstOpt,
            secondOptThird: this.props.location.state.secondOpt
        }
        this.selectOptTwo = this.selectOptTwo.bind(this)
        this.selectOptOne = this.selectOptOne.bind(this)
        this.selectOptThree = this.selectOptThree.bind(this)
        this.selectOptFour = this.selectOptFour.bind(this)
    }

    selectOptOne(){
        this.setState({
            thirdOpt: "Violin"
        })
    }

    selectOptTwo(){
        this.setState({
            thirdOpt: "Piano"
        })
    }

    selectOptThree(){
        this.setState({
            thirdOpt: "Drums"
        })
    }

    selectOptFour(){
        this.setState({
            thirdOpt: "Trumpet"
        })
    }

    render(){
        console.log(this.state.thirdOpt)
        console.log("from secondComp " + this.state.secondOptThird)
        console.log("from firstComp " + this.state.firstOptThird)
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="header">Which instrument is most pleasing to your ear?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne}>Violin</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo}>Piano</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree}>Drums</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour}>Trumpet</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/fourth", state:{firstOpt: this.state.firstOptThird, secondOpt: this.state.secondOptThird, thirdOpt: this.state.thirdOpt}}}><Button outline color="success">Next Question</Button></Link>
                </div>
            </div>
        )

    }
}

export default Third