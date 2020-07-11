import React, {Component} from 'react'

class First extends Component {

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
                        <h2 className="header">What would you least liked to be called?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Ignorant</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Cowardly</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Selfish</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Ordinary</h3>
                    </div>
                </div>
            </div>
        )

    }
}

export default First