import { Component } from 'react';

class Container extends Component{

  render(){
    const { children } = this.props;
    const style = { backgroundColor : 'red' };

    return(
        <div className={ style }>
          {children}
        </div>
    )
  }
}

export default Container;