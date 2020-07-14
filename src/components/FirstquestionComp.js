import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from "reactstrap"

class First extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstOpt: "",
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
            firstOpt: "Ignorent",
            firstOptCol: "#3399ff",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptTwo(){
        this.setState({
            firstOpt: "Cowerdly",
            firstOptCol: "cyan",
            secondOptCol: "#3399ff",
            thirdOptCol: "cyan",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptThree(){
        this.setState({
            firstOpt: "Selfish",
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "#3399ff",
            fourthOptCol: "cyan",
            btn: true
        })
    }

    selectOptFour(){
        this.setState({
            firstOpt: "Ordinary",
            firstOptCol: "cyan",
            secondOptCol: "cyan",
            thirdOptCol: "cyan",
            fourthOptCol: "#3399ff",
            btn: true
        })
    }

    render(){
        let button
        if(this.state.btn){
            button = <Button color="success">Next Question</Button>
        }
        console.log(this.state.firstOpt)
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-sm-8">
                        <h2 className="header">What would you least liked to be called?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne} style={{backgroundColor: this.state.firstOptCol}}>Ignorant</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo} style={{backgroundColor: this.state.secondOptCol}}>Cowardly</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree} style={{backgroundColor: this.state.thirdOptCol}}>Selfish</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour} style={{backgroundColor: this.state.fourthOptCol}}>Ordinary</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/second", state:{firstOpt: this.state.firstOpt}}}>{button}</Link>
                </div> 
            </div>
        )

    }
}

export default First