//import React, { Component } from 'react';
//import './Form.css'
// class Form extends Component {
//   render() {
//     return (
//       <div id="Form" >
//         <h3>Add a new item to the table:</h3>  
//         <form onSubmit={this.handleFormSubmit} className='.bg'>
        
//           <label htmlFor="name">
//           Name:
//           <input id="name" value={this.newname} 
//             type="text" name="name"
//             onChange={this.handleInputChange} />
//           </label>
//           <label htmlFor="mobile">
//           Mobile:
//           <input id="mobile" value={this.newmobile} 
//             type="number" name="mobile"
//             onChange={this.handleInputChange} />
//           </label>
//           <label htmlFor="addrs">
//           Address:
//           <textarea id="addrs" value={this.newaddrs} 
//             type="text" name="addrs"
//             onChange={this.handleInputChange} />
//           </label>
//           <label htmlFor="city">
//           City:
//           <input id="city" value={this.newcity} 
//             type="text" name="city"
//             onChange={this.handleInputChange} />
//           </label>
//           <label htmlFor="states">
//           States:
//           <input id="states" value={this.newstates} 
//             type="text" name="states"
//             onChange={this.handleInputChange} />
//           </label>
//           <label htmlFor="zip">
//           Pincode:
//           <input id="zip" value={this.newzip} 
//             type="number" name="zip"
//             onChange={this.handleInputChange} />
//           </label>
//           <div>
//       <div className="radio-buttons">
//         present
//         <input
//           id="present"
//           value="present"
//           name="type"
//           type="radio"
//           onChange={this.handleInputChange}
//         />
//         permanant
//         <input
//           id="permanant"
//           value="permanent"
//           name="type"
//           type="radio"
//           onChange={this.handleInputChange}
//         />
//         both
//         <input
//           id="both"
//           value="both"
//           name="type"
//           type="radio"
//           onChange={this.handleInputChange}
//         />
//       </div>
//       </div>
//           <button  className='.close' onClick={this.hideCartHandler} >Close</button>

//           <button type="submit" value="Submit">submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
