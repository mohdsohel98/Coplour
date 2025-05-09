// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class Greeting extends Component {
//   state = {
//     username: '',
//     displayName: 'Guest',
//     isMounted: true,
//   };

//   componentDidMount() {
//     console.log(`Hello ${this.state.displayName}!`);
//   }

//   componentWillUnmount() {
//     console.log(`Bye ${this.state.displayName}!`);
//   }

//   handleInputChange = (e) => {
//     this.setState({ username: e.target.value });
//   };

//   handleSubmit = () => {
//     const name = this.state.username.trim() || 'Guest';
//     this.setState({ displayName: name }, () => {
//       console.log(`Hello ${this.state.displayName}!`);
//     });
//   };

//   handleUnmount = () => {
//     this.setState({ isMounted: false });
//   };

//   render() {
//     if (!this.state.isMounted) {
//       return null; // Triggers componentWillUnmount
//     }

//     return (
//       <div className="container mt-4">
//         <h3>Enter Your Name</h3>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter your name"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//           />
//           <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
//             Submit
//           </button>
//           <button className="btn btn-danger mt-2 ms-2" onClick={this.handleUnmount}>
//             Unmount
//           </button>
//         </div>
//         <h4>Hello {this.state.displayName}!</h4>
//       </div>
//     );
//   }
// }

// export default Greeting;



 import React from 'react'
 
 const []

 function Greeting() {
   return (
     <div>Greeting</div>
   )
 }
 
 export default Greeting