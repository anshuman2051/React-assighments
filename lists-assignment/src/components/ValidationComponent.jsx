import React, {Component} from 'react';

class ValidationComponent extends Component{
    render(){
        let msg = "Text too short";
        if(this.props.txt.length > 3)
            msg = "Text long enough";

        return(
            <div>
                {msg}
            </div>
        );
    }
}

export default ValidationComponent;