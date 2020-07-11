import React, {Component} from 'react'

class Gryf extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className = "container text-center qs">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h1 className="header">You got: Gryffindor!</h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="lead options">"Where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart."</h2>
                    </div>
                </div>
            </div>
        )

    }
}

export default Gryf