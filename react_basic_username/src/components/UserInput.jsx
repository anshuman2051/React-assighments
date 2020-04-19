import React, {Component} from 'react';

class UserInput extends Component{

    cssStyle = {
        "backgroundColor" : "#f1f1f1",
        "boxShadow" : "2px"
    };
    render(){
        return(
            // <input style={this.cssStyle} type="text"  placeholder="hello"
            // onChange={()=>this.props.changeUser({target:{value:"ansh"}})}/>

            <input style={this.cssStyle} type="text"  placeholder="hello"
            onChange={this.props.changeUser} value={this.props.uname}/>
        );
    }
}

export default UserInput;