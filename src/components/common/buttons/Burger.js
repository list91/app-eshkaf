// import React, { Component } from 'react';

// class Burger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMobile: false,
//       isChecked: false
//     };
//   }

//   handleCheckboxChange = () => {
//     if (!this.state.isMobile) {
//       this.setState({ isChecked: !this.state.isChecked });
//     }
//   };

//   componentDidMount() {
//     const mediaQuery = window.matchMedia('(max-width: 768px)');
    
//     const updateIsMobile = () => {
//       this.setState({ isMobile: mediaQuery.matches });
//     };
    
//     mediaQuery.addListener(updateIsMobile);
    
//     updateIsMobile();
//   }

//   componentWillUnmount() {
//     const mediaQuery = window.matchMedia('(max-width: 768px)');
//     const updateIsMobile = () => {
//       this.setState({ isMobile: mediaQuery.matches });
//     };
//     mediaQuery.removeListener(updateIsMobile);
//   }

//   render() {
//     return (
//       <div className="burger">
//         <div className="container nav-container">
//           <input
//             className="checkbox"
//             type="checkbox"
//             checked={this.state.isChecked}
//             onChange={this.handleCheckboxChange}
//           />
//           <div className="hamburger-lines">
//             <span className="line line1"></span>
//             <span className="line line2"></span>
//             <span className="line line3"></span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Burger;