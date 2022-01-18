import React, { useState } from "react";

const Test = () => {
  const [array, setArray] = useState([]);

  const onClick = () => {
    setArray((prevArray) => {
      return [...prevArray, 1];
    });
  };
  return (
    <div>
      <button onClick={onClick}>클릭</button>
    </div>
  );
};
// class Test extends PureComponent {
//   state = {
//     array: [],
//   };
//   onClick = () => {
//     this.setState({
//       array:[...this.state.array,1],
//     });
//   };
//   render() {
//     console.log("렌더링", this.state);
//     return (
//       <div>
//         <button onClick={this.onClick}>클릭</button>
//       </div>
//     );
//   }
// }
export default Test;
