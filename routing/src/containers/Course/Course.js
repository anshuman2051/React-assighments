import React, { Component } from 'react';

class Course extends Component {
    render () {
        let data = [];
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        for( let params of query.entries()){
            data.push(params[1]);
        }
        // console.log(params[0]);
        return (
            <div>
                <h1>{data[0]}</h1>
                <p>You selected the Course with ID: {data[1]}</p>
            </div>
        );
    }
}

export default Course;