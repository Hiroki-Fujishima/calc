import React from 'react';

class RedButton extends React.Component {
    render() {
        console.log('=============');
        console.log(this);
        console.log('=============');
        console.log(this.props);
        return(
            <button style={{width:'100px',height:'100px',backgroundColor:this.props.backgroundColor}}>
              test
            </button>
            
        );
     }
    }
export default RedButton;