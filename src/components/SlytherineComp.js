import React, {Component} from 'react'

class Slyt extends Component {

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
                        <h1 className="header">You got: Slytherine!</h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="options_one">“Or perhaps in Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends.”</h2>
                    </div>
                </div>
            </div>
        )

    }
}

export default Slyt