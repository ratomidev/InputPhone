import React, { useState } from 'react';
import fileJson from "./fileJson"
import "./phoneNumberStyle.css"
const PhoneInput = () => {
  const [country, setCountry] = useState("TN");
  const [phoneNumber, setPhoneNumber] = useState('+216');
  const [iconBack, setIconBack] = useState("https://cdn.kcak11.com/CountryFlags/countries/tn.svg") 


  function findElement(isoCode) {
    const element =   fileJson.find((item)=> item.isoCode === isoCode )
    return element 
  }
  
  return (
    <div>
      
      <select  value={country} style={{backgroundImage: `url(${iconBack})`}}  onChange={e =>
      
      { 
        setCountry(e.target.value.);
         console.log(e.target.value); 
         let obj = findElement(e.target.value);
         setIconBack(obj.flag)
         setPhoneNumber(obj.dialCode) 
         }}>
      
        {fileJson.map((item)=>{ return <option  key= {item.id} value={item.isoCode}  >{item.isoCode}</option>})}
      </select>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default PhoneInput;
