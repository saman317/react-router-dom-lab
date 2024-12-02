import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const MailBoxForm = (props) => {
    const[formData, setFormData]= useState({});
    const navigate= useNavigate();

    const handleSubmit = (e)=>{
     e.preventDefault();
    console.log(formData);
    props.addBox(formData);
    setFormData({});
    navigate("/mailboxes")
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value // update the value of input field
        })
    }
    
  return (
    <div>
        <h1>MailBoxForm</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='boxholder'>BoxHolder</label>
            <input
            type="text"
            id="boxholder"
            name="boxholder"
            onChange={handleChange}
            value={formData.boxholder}
            />

            <label htmlFor="boxsize">Box Size</label>
            <select
            id="boxsize"
            name="boxsize"
            onChange={handleChange}
            value={formData.boxSize}

            >

            <option value="small">Small</option>
             <option value="medium">Medium</option> 
             <option value="large">Large</option>   


                </select>
            
            

            
            <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default MailBoxForm