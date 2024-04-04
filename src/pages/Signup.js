import React, {
    useState,
    useEffect
} from 'react';
import '../App.css';
import toast, { Toaster } from "react-hot-toast";
import '../assets/css/Signup.css';
import {useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import axios from 'axios'; 


const Signup = () => {

    


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);
    // const [loggedIn, setLoggedIn] = useState(false);
   
    useEffect(() => {
        const initializeWeb3 = async () => {
            const ganacheUrl = 'http://127.0.0.1:7545/';
            const web3Instance = new Web3(ganacheUrl);
            setWeb3(web3Instance);

            try {
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[1]);
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

    const fetchContractABI =  async () => {
        const response = await axios.get('http://localhost:4000/getAuthContractABI');
        return response;
        
    }

    const handleSignup = async () => {
      
        if (!web3) {
            console.error('Web3 Not initialized');
            return;
        }

        // Validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }


        // Validating password format
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least 8 characters, including an uppercase letter and a number. Special characters other than '@' are not allowed.");
            return;
        }
        try {
            let authContractABI = await fetchContractABI();
            authContractABI = authContractABI.data;
            console.log(authContractABI);
            let authContractAddress = await fetchContractAddress();
            authContractAddress = authContractAddress.data.AuthenticateAddress;
            // Check if ABI is an array
            if (!Array.isArray(authContractABI)) {
                throw new Error("ABI is not an array");
            }

            // Check if contract address is valid
            if (!web3.utils.isAddress(authContractAddress)) {
                throw new Error("Invalid contract address");
            }
            const contract = new web3.eth.Contract(authContractABI, authContractAddress);
           
            const gas = 500000; 
            await contract.methods.signUp(name, email, password).send({ from: account,gas });
            console.log(await contract.methods.getAllUsers().call());
            console.log('Signup successful! User details stored on blockchain.');
            navigate('/signin');
        }
        catch (error) {
            console.error('Error signing up:', error);
        }

        
        
       
    };

    const handleSignIn = () => {
        navigate("/signin");
    }

    return (
        <div className="signup-container">
            <div className = "header">
                <div className = "text"> Sign Up</div>
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
                    placeholder="youremail@xyz.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='input'
                />
                </div>
                <div className='input'>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='input'
                />
                </div>
                </div>
                <div className='forgot-password'>Forgot your password?
                {/* <p>
                    <span className="forgot-password-link" onClick={handleForgotPassword}>
                        Forgot Password?
                    </span>
                </p> */}
                </div>
                <div className='submitdiv'>
                    <button type="button" onClick={handleSignup} className='submit'>Sign Up</button>
                    {/* <button type="button" */}
                    <button type="button" onClick={handleSignIn} className='submit'>Sign In</button>
                </div>
            </form>     
            <Toaster />      
        </div>
    );
};

export default Signup;