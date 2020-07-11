import React, {Component} from 'react'

class Second extends Component {

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
                        <h2 className="header">If you could make a potion that would guarantee you one thing, what would it be? </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Love</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Glory</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Wisdom</h3>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h3 className="options">Power</h3>
                    </div>
                </div>
            </div>
        )

    }
}

export default Second