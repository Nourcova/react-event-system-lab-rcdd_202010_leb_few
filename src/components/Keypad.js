import React from 'react';

class Keypad extends React.Component{
  
  handlePassword=()=> console.log('Entering password...')
  
  render() {
    return (
      <div>
    <input type="password"
    onKeyUp
    />
</div>);
  }
}

export default Keypad;