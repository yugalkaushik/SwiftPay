import React, {useState} from "react";
import axios from 'axios';

const Transfer = () => {
    const [formData, setFormData] = useState({recipientEmail: '', amount:''});

    const { recipientEmail, amount} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        try{
            const res = await axios.post('/api/transactions/transfer', formData, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            console.log(res.data);
        } catch(err){
            console.error(err.response.data);
        }
    };

    return(
        <form onSubmit={onSubmit}>
        <div>
          <input type="email" name="recipientEmail" value={recipientEmail} onChange={onChange} placeholder="Recipient Email" required />
        </div>
        <div>
          <input type="number" name="amount" value={amount} onChange={onChange} placeholder="Amount" required />
        </div>
        <button type="submit">Transfer</button>
      </form>
    );
};

export default Transfer;