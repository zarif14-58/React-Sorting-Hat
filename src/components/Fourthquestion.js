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
            thirdOptFourth: this.props.location.state.thirdOpt,
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
            fourthOpt: "Hunger",
            firstOptCol: "#3399ff",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptTwo(){
        this.setState({
            fourthOpt: "Cold",
            firstOptCol: "cyan",
            secondOptCol: "#3399ff",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptThree(){
        this.setState({
            fourthOpt: "Boredom",
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "#3399ff",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptFour(){
        this.setState({
            fourthOpt: "Loneliness",
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "#3399ff",
            btn: true
        })
    }


    render(){
        console.log(this.state.fourthOpt)
        console.log("from first comp " + this.state.firstOptFourth)
        console.log("from sec comp " + this.state.secondOptFourth)
        console.log("from third comp " + this.state.thirdOptFourth)
        let button 
        if(this.state.btn){
            button = <Button color="success">Next Question</Button>
        }
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-sm-8">
                        <h2 className="header">Which of the following do you have the most trouble dealing with?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne} style={{backgroundColor: this.state.firstOptCol}}>Hunger</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo} style={{backgroundColor: this.state.secondOptCol}}>Cold</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree} style={{backgroundColor: this.state.thirdOptCol}}>Boredom</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour} style={{backgroundColor: this.state.fourthOptCol}}>Loneliness</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/fifth", state:{firstOpt: this.state.firstOptFourth, secondOpt: this.state.secondOptFourth, thirdOpt: this.state.thirdOptFourth, fourthOpt: this.state.fourthOpt}}}>{button}</Link>
                </div>
            </div>
        )

    }
}

export default Fourth