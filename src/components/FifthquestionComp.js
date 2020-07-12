import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class Fifth extends Component {

    constructor(props){
        super(props)
        this.state = {
            fifthOpt: "",
            firstOptFifth: this.props.location.state.firstOpt,
            secondOptFifth: this.props.location.state.secondOpt,
            thirdOptFifth: this.props.location.state.thirdOpt,
            fourthOptFifth: this.props.location.state.fourthOpt,
            firstOptCol: "cyan",
            secondOptCol: "cyan"
        }
        this.selectOptTwo = this.selectOptTwo.bind(this)
        this.selectOptOne = this.selectOptOne.bind(this)
    }

    selectOptOne(){
        this.setState({
            fifthOpt: "Dawn",
            firstOptCol: "#3399ff",
            secondOptCol: "cyan"
        })
    }

    selectOptTwo(){
        this.setState({
            fifthOpt: "Dusk",
            firstOptCol: "cyan",
            secondOptCol: "#3399ff"
        })
    }


    render(){
        console.log(this.state.fifthOpt)
        console.log("from first comp " + this.state.firstOptFifth)
        console.log("from sec comp " + this.state.secondOptFifth)
        console.log("from third comp " + this.state.thirdOptFifth)
        console.log("from fourth comp " + this.state.fourthOptFifth)
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-sm-8">
                        <h2 className="header">Dawn or Dusk?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptOne} style={{backgroundColor: this.state.firstOptCol}}>Dawn</h3>
                    </div>
                    <div className="col-5 col-sm-4">
                        <h3 className="options" onClick={this.selectOptTwo} style={{backgroundColor: this.state.secondOptCol}}>Dusk</h3>
                    </div>
                </div>
                <div className="text-center mt-50">
                    <Link to={{pathname: "/result", state:{firstOpt: this.state.firstOptFifth, secondOpt: this.state.secondOptFifth, thirdOpt: this.state.thirdOptFifth, fourthOpt: this.state.fourthOptFifth, fifthOpt: this.state.fifthOpt}}}><Button color="success">Get Your Result</Button></Link>
                </div>
            </div>
        )

    }
}

export default Fifth