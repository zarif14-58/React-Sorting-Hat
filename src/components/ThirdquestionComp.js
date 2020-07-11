import React, {Component} from 'react'

class Third extends Component {

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
                        <h2 className="header">Which instrument is most pleasing to your ear?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Violin</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Piano</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Drums</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Trumpet</h3>
                    </div>
                </div>
            </div>
        )

    }
}

export default Third