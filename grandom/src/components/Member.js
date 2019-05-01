import React from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <div className='member'>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Member;