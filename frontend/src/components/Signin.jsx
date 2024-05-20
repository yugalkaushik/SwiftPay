//SIGN IN COMPONENT FOR USER LOGIN

import React,{useState} from "react";
import exios from 'exios';

const Signin =() => {
    const [formData, setFormData] = useState({email:'',password: ''});

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        try{
            const res = await axios.post('/api/auth/signin',formData);
            console.log(res.data);
        } catch(err){
            console.error(err.response.data)
        }
    };

    return(
        <form onSubmit={onSubmit}>
      <div>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      </div>
      <div>
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      </div>
      <button type="submit">Signin</button>
    </form>
  );
};

export default Signin;