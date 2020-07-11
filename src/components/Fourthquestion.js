import React, {Component} from 'react'

class Fourth extends Component {

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
                        <h2 className="header">Which of the following do you have the most trouble dealing with?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Hunger</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Cold</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Boredom</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Loneliness</h3>
                    </div>
                </div>
            </div>
        )

    }
}

export default Fourth