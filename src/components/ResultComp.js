import React, {Component} from "react"
import Raven from "./RavenclawComp"
import Gryf from "./GryffindorComp"
import Slyt from "./SlytherineComp"
import Huff from "./HufflepuffComp"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"


class Result extends Component {
    constructor(props){
        super(props)
        this.state = {
            fifthOptRes: this.props.location.state.fifthOpt,
            firstOptRes: this.props.location.state.firstOpt,
            secondOptRes: this.props.location.state.secondOpt,
            thirdOptRes: this.props.location.state.thirdOpt,
            fourthOptRes: this.props.location.state.fourthOpt
        }
    }

    render(){
        const first = this.state.firstOptRes
        const second = this.state.secondOptRes
        const third = this.state.thirdOptRes
        const fourth = this.state.fourthOptRes
        const fifth = this.state.fifthOptRes
        
        console.log("from first comp res " + first)
        console.log("from sec comp res " + second)
        console.log("from third comp res " + third)
        console.log("from fourth comp res " + fourth)
        console.log("from fifth comp res " + fifth)

        let res
        if(first === "Ignorent" && second === "Wisdom" && third === "Piano" && fourth === "Cold" && fifth === "Dawn"){
            res = <Raven />
        }
        else if(first === "Cowerdly" && second === "Glory" && third === "Drums" && fourth === "Boredom" && fifth === "Dawn"){
            res = <Gryf />
        }
        else if(first === "Selfish" && second === "Love" && third === "Violin" && fourth === "Loneliness" && fifth === "Dawn"){
            res = <Huff />
        }
        else if(first === "Ordinary" && second === "Power" && third === "Trumpet" && fourth === "Hunger" && fifth === "Dusk"){
            res = <Slyt />
        }
        else if(first === "Ignorent" && second === "Wisdom" && third === "Drums" && fourth === "Cold" && fifth === "Dusk"){
            res = <Raven />
        }
        else if(first === "Cowerdly" && second === "Wisdom" && third === "Drums" && fourth === "Cold" && fifth === "Dawn"){
            res = <Gryf />
        }
        else if(first === "Ignorent" && second === "Wisdom" && third === "Piano" && fourth === "Loneliness" && fifth === "Dusk"){
            res = <Raven />
        }
        else if(first === "Ordinary" && second === "Power" && third === "Drums" && fourth === "Hunger" && fifth === "Dusk"){
            res = <Slyt />
        }
        else if(first === "Ordinary" && second === "Power" && third === "Trumpet" && fourth === "Hunger" && fifth === "Dawn"){
            res = <Slyt />
        }
        else if(first === "Ordinary" && second === "Power" && third === "Trumpet" && fourth === "Boredom" && fifth === "Dusk"){
            res = <Slyt />
        }
        else{
            if(second === "Wisdom"){
                res = <Raven />
            }
            else if(second === "Glory"){
                res = <Gryf />
            }
            else if(second === "Power"){
                res = <Slyt />
            }
            else if(second === "Love"){
                res = <Huff />
            }
        }


        return(
            <React.Fragment>
                {res}
                <div className="text-center">
                    <Link to="/">
                        <Button color="success">Take The Quiz Again</Button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Result