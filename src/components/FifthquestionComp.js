import React, {Component} from 'react'

class Fifth extends Component {

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
                        <h2 className="header">Dawn or Dusk?</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Dawn</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Dusk</h3>
                    </div>
                </div>
            </div>
        )

    }
}

export default Fifth