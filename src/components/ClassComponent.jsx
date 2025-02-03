import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Test message'
        };
    }

    render() {
        return <h1>{this.state.message}</h1>
    }
}

export default Test;


//desuso - hooks não podem ser usados dentro dele