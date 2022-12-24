export const validateName = (value)=>{
   if(value.length!==0 && /^[a-zA-Z]*$/.test(value)){
 return true;
  }
  if(!/^[a-zA-Z]*$/.test(value)){
return 2;
     }
  if(!value.length!==0){
      return 0;
           }
}



export const validateMobile=(value)=>{

  if(value.length!==0 && !isNaN(value) && value.length===10){
    return true;
     }
  if(value.length===0){
    return 0;
  }
  if(value.length!==0 && isNaN(value)){
    return 1;
  }
  if(value.length<10 && value.length!==0 && !isNaN(value)){
    return 2;
         }
}
export const validateAddress=(value)=>{
  if(value.length!==0){
var wordCount = value.match(/(\w+)/g).length;
  }
  if(value.length!==0 && wordCount>=3){
    return true;
     }
     if(value.length===0){
      return 0;
    }
    if(wordCount<3){
      return 1;
    }
}
export const validateCity=(value)=>{
  if(value.length!==0 && /^[a-zA-Z]*$/.test(value)){
    return true;
     }
  if(value.length===0){
    return 0;
  }
  if(!/^[a-zA-Z]*$/.test(value)){
    return 1;
         }
}
export const validateStates=(value)=>{
  if(value.length!==0 && /^[a-zA-Z]*$/.test(value)){
    return true;
     }
  if(value.length===0){
    return 0;
  }
  if(!/^[a-zA-Z]*$/.test(value)){
    return 1;
         }
}
export const validateZip=(value)=>{
  if(value.length!==0 && !isNaN(value) && value.length===6){
    return true;
     }
  if(value.length===0){
    return 0;
  }
  if(value.length!==0 && isNaN(value)){
    return 1;
  }
  if(value.length>6 && value.length!==0 && !isNaN(value)){
    return 2;
         }

}
export default {validateName,validateMobile,validateAddress,validateCity,validateStates,validateZip};