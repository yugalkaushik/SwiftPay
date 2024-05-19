import React,{useState} from "react";
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({name:'',email:'',password:''});

    const {name, email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try{
            const res = await axios.post('/api/auth/signup', formData);
            console.log(res.data);
        }
        catch(err){
            console.error(err.response.data);
        }
    };

    return(
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
            </div>
            <div>
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
            </div>
            <div>
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            </div>
            <button type="Submit">SignUp</button>
        </form>
    );
};

export default Signup;
