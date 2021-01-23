import React from 'react';

class Keypad extends React.Component{
  
  render() {
    return (
      <div>
    <label for="pass">Password</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
</div>);
  }
}

export default Keypad;