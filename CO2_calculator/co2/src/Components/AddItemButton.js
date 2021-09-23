import React from 'react'

class AddButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.


    handleClick = () => {
      //const [itemBox, setItemBox] = useState([]);
      console.log('this is:', this);
      
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }
  export default AddButton 