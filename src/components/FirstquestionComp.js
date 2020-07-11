import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from "reactstrap"

class First extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstOpt: ""
        }
        this.selectOptTwo = this.selectOptTwo.bind(this)
        this.selectOptOne = this.selectOptOne.bind(this)
        this.selectOptThree = this.selectOptThree.bind(this)
        this.selectOptFour = this.selectOptFour.bind(this)
    }

    selectOptOne(){
        this.setState({
            firstOpt: "Ignorent"
        })
    }

    selectOptTwo(){
        this.setState({
            firstOpt: "Cowerdly"
        })
    }

    selectOptThree(){
        this.setState({
            firstOpt: "Selfish"
        })
    }

    selectOptFour(){
        this.setState({
            firstOpt: "Ordinary"
        })
    }

    render(){
        console.log(this.state.firstOpt)
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="header">What would you least liked to be called?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne}>Ignorant</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo}>Cowardly</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptThree}>Selfish</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options" onClick={this.selectOptFour}>Ordinary</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/second", state:{firstOpt: this.state.firstOpt}}}><Button outline color="success">Next Question</Button></Link>
                </div> 
            </div>
        )

    }
}

export default First