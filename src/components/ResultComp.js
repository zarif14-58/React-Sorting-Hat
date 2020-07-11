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

        let res
        if(first === "Ignorent" && second === "Wisdom" && third === "Piano" && fourth === "Cold" && fifth === "Dawn"){
            res = <Raven />
        }
        if(first === "Cowardly" && second === "Glory" && third === "Drums" && fourth === "Boredom" && fifth === "Dawn"){
            res = <Gryf />
        }
        if(first === "Selfish" && second === "Love" && third === "Violin" && fourth === "Loneliness" && fifth === "Dawn"){
            res = <Huff />
        }
        if(first === "Ordinary" && second === "Power" && third === "Trumpet" && fourth === "Hunger" && fifth === "Dusk"){
            res = <Slyt />
        }

        return(
            <React.Fragment>
                {res}
                <div className="text-center">
                    <Link to="/">
                        <Button outline color="success">Take The Quiz Again</Button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Result