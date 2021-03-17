import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                This is react
                {" " + this.props.type}.
            </div>
        );
    }
}

export default ClassComponent;
