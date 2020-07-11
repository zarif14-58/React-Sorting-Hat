import React, {Component} from 'react'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="display-2 text-center">Sorting Hat Quiz</h1>
            </React.Fragment>
        )
    }
}

export default Header