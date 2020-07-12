import React, {Component} from 'react'

class Huff extends Component {

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
                        <h1 className="header">You got: Hufflepuff!</h1>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-sm-8">
                        <h2 className="options_one">“You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil”</h2>
                    </div>
                </div>
            </div>
        )

    }
}

export default Huff