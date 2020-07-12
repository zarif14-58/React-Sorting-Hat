import React, {Component} from 'react'

class Raven extends Component {

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
                        <h1 className="header">You got: Ravenclaw!</h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="options_one">“Or yet in wise old Ravenclaw if you've a ready mind. Where those of wit and learning will always find their kind.”</h2>
                    </div>
                </div>
            </div>
        )

    }
}

export default Raven