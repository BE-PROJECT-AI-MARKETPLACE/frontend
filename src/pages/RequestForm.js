import React,{useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';

const RequestForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [domain, setDomain] = useState('');
    const [useCase, setUseCase] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            domain: domain,
            useCase: useCase,
            description:description,
        }
        console.log(formdata);
        // send api request to backend
        const response = await axios.post("http://localhost:4000/processrequest", formdata);
        const success = response.data.success;
        if (success) {
            toast.success("Request Sent Successfully");
            setTimeout(() => {
                navigate('/aimarketplace'); // Replace '/' with your home page route
            }, 2000);
           
            
        }
        console.log(response.data.message);
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setUseCase("");
        setDomain("");
        setDescription("");
    }

    return (
        <div className="signup-container">
            <div className="header">
                <div className="text"> Request AI Service </div>
            </div>
            <form >
                <div className='inputs'>
                    <div className='input'>
                        <input
                            type="text"
                            id="Name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='input'
                        />
                    </div>

                    <div className='input'>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='input'
                        />
                    </div>

                    <div className='input'>
                        <input
                            type="numeric"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className='input'
                        />
                    </div>

                    <div className='input'>
                        <input
                            type="text"
                            id="Domain"
                            placeholder="Domain"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            required
                            className='input'
                        />
                    </div>

                    <div className='input'>
                        <input
                            type="text"
                            id="UseCase"
                            placeholder="Use Case"
                            value={useCase}
                            onChange={(e) => setUseCase(e.target.value)}
                            required
                            className='input'
                        />
                    </div>

                    <div className='input'>
                        <input
                            type="text"
                            id="Description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
                    
                </div>
                <div className='submitdiv'>
                    <button type="button" onClick={handleSubmit} className='submit'>Submit Request</button>
                    <button type="button" onClick={resetForm}  className='submit'>Clear Form</button>                
                </div>
            </form>
            <Toaster />
        </div>
    )
}

export default RequestForm;

