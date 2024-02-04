import React,{useState,useEffect} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';

const RequestForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [domain, setDomain] = useState('');
    const [useCase, setUseCase] = useState('');
    const [description, setDescription] = useState('');
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);
    useEffect(() => {
        const initializeWeb3 = async () => {
            const ganacheUrl = 'http://127.0.0.1:7545/';
            const web3Instance = new Web3(ganacheUrl);
            setWeb3(web3Instance);

            try {
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
            } catch (error) {
                console.error('Error connecting to Ganache:', error);
            }


        };

        initializeWeb3();

        //cleanup
        return () => {
            if (web3 && web3.currentProvider && web3.currentProvider.close) {
                web3.currentProvider.close();
            }
        };

    }, []);


    const fetchContractAddress = async () => {
        const response = await axios.get('http://localhost:4000/getContractAddress');
        return response;
    }

    const fetchContractABI = async () => {
        const response = await axios.get('http://localhost:4000/getRequestServiceContractABI');
        return response;

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!web3) {
            console.error('Web3 Not initialized');
            return;
        }
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
        try {
            let RequestServiceContractABI = await fetchContractABI();
            RequestServiceContractABI = RequestServiceContractABI.data;
            console.log(RequestServiceContractABI);
            let RequestServiceContractAddress = await fetchContractAddress();
            RequestServiceContractAddress = RequestServiceContractAddress.data.RequestServiceAddress;
            console.log(RequestServiceContractAddress);
            // Check if ABI is an array
            if (!Array.isArray(RequestServiceContractABI)) {
                throw new Error("ABI is not an array");
            }

            // Check if contract address is valid
            if (!web3.utils.isAddress(RequestServiceContractAddress)) {
                throw new Error("Invalid contract address");
            }
            const contract = new web3.eth.Contract(RequestServiceContractABI,RequestServiceContractAddress);

            const gas = 500000;

            console.log(await contract.methods.getAllRequests().call());
            await contract.methods.addRequest(name,email,phoneNumber,useCase,domain,description).send({ from: account, gas });
            console.log(await contract.methods.getAllRequests().call());
            const response = await axios.post("http://localhost:4000/processrequest", formdata);
            const success = response.data.success;
            if (success) {
                toast.success("Request Sent Successfully");
                console.log(response.data.message);

                setTimeout(() => {
                    navigate('/aimarketplace'); // Replace '/' with your home page route
                }, 2000);
            }
        }
        catch (error) {
            console.error('Error signing in:', error);
        }
        
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

