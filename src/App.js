
import React, { Component } from 'react';
import './App.css';
import Modal from "./components/Modal";
import {validateName,validateAddress,validateMobile,validateCity,validateStates,validateZip} from "./components/validation";

class Home extends Component {
  constructor() {
    super();
    this.state = {
  checked: "",
  show: false,
  show_personal: true,
  name: "",
  age:"",
  mobile: "",
  addrs: "",
  city: "",
  states: "",
  type: "",
  zip: "",
  name1: "",
  mobile1: "",
  addrs1: "",
  city1: "",
  states1: "",
  type1: "",
  zip1: "",
  name_error: "",
  mobile_error: "",
  addrs_error: "",
  city_error: "",
  states_error: "",
  zip_error: "",
  personal: [
    {
      name: "Sample",
      mobile: "1234567890",
      addrss: "a a a",
      city: "Chennai",
      states: "Tamil Nadu",
      zip: "123456",
      type: "Present"
    },
  ],
  business: [
    {
      name: "cool",
      mobile: "1234567890",
      addrss: "a a a",
      city: "Chennai",
      states: "Tamil Nadu",
      zip: "123456",
      type: "Present"
    },
  ],
  nameValid: false,
  mobileValid: false,
  addrsValid:false,
  cityValid:false,
  statesValid:false,
  zipValid:false
};
}

componentDidMount=()=>{
  this.handleBorder();
}

onClose = () => {
  this.setState({show:false}, () => {
    console.log(this.state.show);
  })
  this.setState({
    name:'',
    mobile:'',
    addrs:'',
    city:'',
    states:'',
    zip:'',
    type:'',
    checked:'',
    name_error:'',
    mobile_error:'',
    addrs_error:'',
    city_error:'',
    states_error:'',
    zip_error:''
   })
};
handleChange = (e) => {
  let input = e.target;
  let name = e.target.name;
  let value = input.value;

  this.setState({
    [name]: value
  }, () => { this.validateField(name, value) })
  
};
handleSave = (e) => {
  if(this.state.checked === 'Personal'){
   this.onPersonal();
  }
  if(this.state.checked === 'Business'){
   this.onBusiness();
  }
      console.log("iam"+this.state.show_personal)
      this.onClose()
 };
 handleClear=(e)=>{
  this.setState({
   name:'',
   mobile:'',
   addrs:'',
   city:'',
   states:'',
   zip:'',
   type:'',
   checked:'',
   name_error:'',
   mobile_error:'',
   addrs_error:'',
   city_error:'',
   states_error:'',
   zip_error:''
  })
 }
handleBorder=()=>{
  this.setState({
    borderBottom1: "hidden",
    borderBottom: "3px solid rgb(71,68,206)",
    show_personal: true,
  });
}
handleBorder1=()=>{
  this.setState({
    borderBottom: "hidden",
    borderBottom1: "3px solid rgb(71,68,206)",
    show_personal: false,
  });
}

showCartHandler = () => {
      this.setState({show:true})
    };
onPersonalTrue =  () => {
      this.setState({show_personal:true}, () => {
        console.log(this.state.show_personal);
      })
    };
onPersonalFalse= () => {
      this.setState({show_personal:false}, () => {
        console.log(this.state.show_personal);
      })
    };
onPersonal=()=>{
  this.onPersonalTrue();
   let personal = [...this.state.personal];
   personal.push({
     name: this.state.name,
     mobile: this.state.mobile,
     addrss:this.state.addrs,
     city:this.state.city,
     states:this.state.states,
     zip:this.state.zip,
     type:this.state.type
   });
   this.setState({
     personal,
     name: '',
     mobile: '',
     addrs:'',
     city:'',
     states:'',
     zip:'',
     type:''
   });
  }
onBusiness=()=>{
    this.onPersonalFalse();
    let business = [...this.state.business];
    business.push({
      name: this.state.name,
      mobile: this.state.mobile,
      addrss:this.state.addrs,
      city:this.state.city,
      states:this.state.states,
      zip:this.state.zip,
      type:this.state.type
    });
    this.setState({
      business,
      name: '',
      mobile: '',
      addrs:'',
      city:'',
      states:'',
      zip:'',
      type:''
    });
}
validateField(fieldName, value) {
  switch(fieldName) {
      case 'name':
        this.nameValidation(validateName(value));
        break;
      case 'mobile':
        this.mobileValidation(validateMobile(value));
        break;
      case 'addrs':
          this.addrsValidation(validateAddress(value));
          break;
      case 'city':
          this.cityValidation(validateCity(value));
          break;
      case 'states':
          this.statesValidation(validateStates(value));
          break;
      case 'zip':
            this.zipValidation(validateZip(value));
            break;
       default:
         break;
    }
}
nameValidation=(value)=>{
    let nameValid = this.state.nameValid;
if(value===true && value!==0 && value!==2){
nameValid=true
this.setState({name_error: ""}, () => {
  console.log("from true"+this.state.name_error);
})
}
if(!nameValid && value===0 && value!==2){
 this.setState({name_error: "Please enter a value"}, () => {
  console.log("from 0"+this.state.name_error);
})

}
if(!nameValid && value===2 && value!==0){
 this.setState({name_error: "Chatercters from a-z/A-Z allowed"}, () => {
     console.log("from 2"+this.state.name_error);
 })

}
}
mobileValidation=(value)=>{
    let mobileValid = this.state.mobileValid;
    if(value===true && value!==0 && value!==1 && value!==2){
      mobileValid=true
      this.setState({mobile_error: ""}, () => {
        console.log("from true"+this.state.mobile_error);
      })
      }
    if(!mobileValid && value!==1 && value!==2 && value===0){
      this.setState({mobile_error: "Please enter a value"}, () => {
       console.log("from 0"+this.state.mobile_error);
     })
  }
  if(!mobileValid && value!==0 && value!==2 && value===1){
    this.setState({mobile_error: "Please enter numeric value"}, () => {
        console.log("from 1"+this.state.mobile_error);
    })
   
   }
   if(!mobileValid && value===2){
    this.setState({mobile_error: "Please enter a valid 10 digit mobile number"}, () => {
        console.log("from 2"+this.state.mobile_error);
    })
   
   }
}
addrsValidation=(value)=>{
  let addrsValid = this.state.addrsValid;
  if(value===true && value!==0 && value!==1){
  addrsValid=true
  this.setState({addrs_error: ""}, () => {
    console.log("from true"+this.state.addrs_error);
  })
  }
  if(!addrsValid && value===0 && value!==1){
    this.setState({addrs_error: "Please enter a value"}, () => {
     console.log("from 0"+this.state.name_error);
   })
   
   }
   if(!addrsValid && value===1 && value!==0){
    this.setState({addrs_error: "Address should have a length of atleast 3 words"}, () => {
     console.log("from 1"+this.state.addrs_error);
   })
   
   }
}
cityValidation=(value)=>{
  let cityValid = this.state.cityValid;
  if(value===true && value!==0 && value!==1){
    cityValid=true
    this.setState({city_error: ""}, () => {
      console.log("from true"+this.state.city_error);
    })
    }
  if(!cityValid && value!==1 && value===0){
    this.setState({city_error: "Please enter a value"}, () => {
     console.log("from 0"+this.state.city_error);
   })
}
if(!cityValid && value!==0 && value===1){
  this.setState({city_error: "Chatercters from a-z/A-Z allowed"}, () => {
      console.log("from 1"+this.state.city_error);
  })
 
 }
}
statesValidation=(value)=>{
  let statesValid = this.state.statesValid;
  if(value===true && value!==0 && value!==1){
    statesValid=true
    this.setState({states_error: ""}, () => {
      console.log("from true"+this.state.states_error);
    })
    }
  if(!statesValid && value!==1 && value===0){
    this.setState({states_error: "Please enter a value"}, () => {
     console.log("from 0"+this.state.states_error);
   })
}
if(!statesValid && value!==0 && value===1){
  this.setState({states_error: "Chatercters from a-z/A-Z allowed"}, () => {
      console.log("from 1"+this.state.states_error);
  })
 
 }
}
zipValidation=(value)=>{
  let zipValid = this.state.zipValid;
  if(value===true && value!==0 && value!==1 && value!==2){
    zipValid=true
    this.setState({zip_error: ""}, () => {
      console.log("from true"+this.state.zip_error);
    })
    }
  if(!zipValid && value!==1 && value!==2 && value===0){
    this.setState({zip_error: "Please enter a value"}, () => {
     console.log("from 0"+this.state.zip_error);
   })
}
if(!zipValid && value!==0 && value!==2 && value===1){
  this.setState({zip_error: "Please enter numeric value"}, () => {
      console.log("from 1"+this.state.zip_error);
  })
 
 }
 if(!zipValid && value===2){
  this.setState({zip_error: "Please enter a valid 6 digit zip pin"}, () => {
      console.log("from 2"+this.state.zip_error);
  })
 
 }
}


render() {

  
    let text='';
    if(this.state.personal.length===0 && this.state.show_personal===true){
      text="No personal recordes to display"
    }
    if(this.state.business.length===0  && this.state.show_personal===false){
      text="No business recordes to display"
    }
    if(this.state.show===true){
      text="Fill Address Details"
    }
    return (
      <div className='App'>
        <h2 className='App-header'></h2>
        <button className="add buttons add:hover btns" onClick={this.showCartHandler.bind(this)}>ADD</button>
        
         <table>
           <tbody>
             <button>
               <tr>
             <th onClick={this.onPersonalTrue.bind(this)}>Personal</th>
        <th onClick={this.onPersonalFalse.bind(this)}>Business</th>

        </tr>
             </button>
        
         
            <tr>
         <td>Name</td>
          <td>Mobile No.</td>
          <td>Address</td>
          <td>City</td>
          <td>State</td>
          <td>Zip</td>
          <td>Present/Permanent Address</td>
            </tr>
<h3>{text}</h3>

            {this.state.show_personal &&  
            this.state.personal.map(item => {
              return (
                <tr>
                 
      <td>{item.name}</td>
      <td>{item.mobile}</td>
      <td>{item.addrss}</td>
      <td>{item.city}</td>
      <td>{item.states}</td>
      <td>{item.zip}</td>
      <td>{item.type}</td>
                </tr>
              );
            })}

          {!this.state.show_personal && 
            this.state.business.map(item => {
              return (
                <tr>
                 
      <td>{item.name}</td>
      <td>{item.mobile}</td>
      <td>{item.addrss}</td>
      <td>{item.city}</td>
      <td>{item.states}</td>
      <td>{item.zip}</td>
      <td>{item.type}</td>
                </tr>
              );
            })}

          </tbody>
        </table>
     
              { this.state.show &&  <Modal>
      
         <form  className='pop bg form' id='newForm' ref="form">
        <h3>{text}</h3>  
        <div
        onClick={this.onClose}
        className="close close-hover"
        id="exampleModal"
      >X</div>
        <div className="radio">
          <input
          id="Personal"
          value="Personal"
          name="checked"
          type="radio"
          className=''
          onChange={e=>this.setState({checked:e.target.value})}
          
        /> Personal
       
        <input
          id="Business"
          value="Business"
          name="checked"
          type="radio"
          className=''
          onChange={e=>this.setState({checked:e.target.value})}
          
        /> Business
        </div>
        
          <label htmlFor="name" className='fields'>
          Name:
          <input id="name" value={this.newname} 
            type="text" name="name" className='input:focus'
            onChange={this.handleChange} />
          </label>
          {!this.state.nameValid && <p>{this.state.name_error}</p>}
          <label htmlFor="mobile" className='fields'>
          Mobile:
          <input id="mobile" value={this.newmobile} 
            type="text" name="mobile" className='input:focus'
            onChange={this.handleChange} />
          </label>
          {!this.state.mobileValid && <p>{this.state.mobile_error}</p>}
          <label htmlFor="addrs"className='fields'>
          Address:
          <textarea id="addrs" value={this.newaddrs} 
            type="text" name="addrs" className='input:focus'
            onChange={this.handleChange} />
          </label>
          {!this.state.addrsValid && <p>{this.state.addrs_error}</p>}
          <label htmlFor="city"className='fields'>
          City:
          <input id="city" value={this.newcity} 
            type="text" name="city" className='input:focus'
            onChange={this.handleChange} />
          </label>
          {!this.state.cityValid && <p>{this.state.city_error}</p>}
          <label htmlFor="states" className='fields'>
          States:
          <input id="states" value={this.newstates} 
            type="text" name="states" className='input:focus'
            onChange={this.handleChange} />
          </label>
          {!this.state.statesValid && <p>{this.state.states_error}</p>}
          <label htmlFor="zip" className='fields'>
          Pincode:
          <input id="zip" value={this.newzip} 
            type="number" name="zip" className='input:focus'
            onChange={this.handleChange} />
          </label>
          {!this.state.zipValid && <p>{this.state.zip_error}</p>}
          <div>
      <div className="radios">
      
        <input
          id="present"
          value="present"
          name="type"
          type="radio"
          className=''
         // checked="Present"
          //onChange={this.handleChange}
          onChange={()=>{this.setState({type:'Present'})}}
        />present
      
        <input
          id="permanant"
          value="permanent"
          name="type"
          type="radio"
          className=''
          //onChange={this.handleChange}
          onChange={()=>{this.setState({type:'Permanent'})}}
        /> permanant
       
        <input
          id="both"
          value="both"
          name="type"
          type="radio"
          className=''
         // onChange={this.handleChange}
         onChange={()=>{this.setState({type:'Both'})}}
        /> both
      </div>
      </div>
      <button className='clear' onClick={this.handleClear}>Clear</button>

          <button type="button" value="Submit" className='save' onClick={this.handleSave}>save</button>
        </form>
      
          </Modal>}
      </div>
    );
  }
}

export default Home;