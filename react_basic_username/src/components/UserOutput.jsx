import React , {Component} from 'react';

class UserOutput extends Component{

    render(){
        return(
            <div className="para_root">
                <p>
                    This is my first para.<br/>
                    and my name is {this.props.uname}
                </p>
                <p>
                    This is my second para.<br/>
                    and my name is {this.props.uname}
                </p>
            </div>
        );
    }
}

export default UserOutput;