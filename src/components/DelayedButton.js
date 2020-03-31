// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleClick = event => {
        event.persist();
        window.setTimeout(()=> {
            this.props.onDelayedClick(event);
        },this.props.delay);
    }

    render() {
        return(


         <div>
            <button onClick={this.handleClick}>Delay</button>
        </div>

        )
    }
}

export default DelayedButton