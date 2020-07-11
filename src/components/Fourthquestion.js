import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

class Fourth extends Component {

    constructor(props){
        super(props)
        this.state = {
            fourthOpt: "",
            firstOptFourth: this.props.location.state.firstOpt,
            secondOptFourth: this.props.location.state.secondOpt,
            thirdOptFourth: this.props.location.state.thirdOpt
        }
        this.selectOptTwo = this.selectOptTwo.bind(this)
        this.selectOptOne = this.selectOptOne.bind(this)
        this.selectOptThree = this.selectOptThree.bind(this)
        this.selectOptFour = this.selectOptFour.bind(this)
    }

    selectOptOne(){
        this.setState({
            fourthOpt: "Hunger"
        })
    }

    selectOptTwo(){
        this.setState({
            fourthOpt: "Cold"
        })
    }

    selectOptThree(){
        this.setState({
            fourthOpt: "Boredom"
        })
    }

    selectOptFour(){
        this.setState({
            fourthOpt: "Loneliness"
        })
    }


    render(){
        console.log(this.state.fourthOpt)
        console.log("from first comp " + this.state.firstOptFourth)
        console.log("from sec comp " + this.state.secondOptFourth)
        console.log("from third comp " + this.state.thirdOptFourth)
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="header">Which of the following do you have the most trouble dealing with?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne}>Hunger</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo}>Cold</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree}>Boredom</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour}>Loneliness</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/fifth", state:{firstOpt: this.state.firstOptFourth, secondOpt: this.state.secondOptFourth, thirdOpt: this.state.thirdOptFourth, fourthOpt: this.state.fourthOpt}}}><Button outline color="success">Next Question</Button></Link>
                </div>
            </div>
        )

    }
}

export default Fourth