import React from 'react';

class FlexibleButton extends React.Component {
    render() {
      
        return(
            <button style={{width:this.props.width,height:'100px',backgroundColor:'red'}}>
              test
            </button>
            
        );
     }
    }
export default FlexibleButton;