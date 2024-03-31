import React, { useState, useEffect } from 'react';
import '../App.css';
import toast, { Toaster } from "react-hot-toast";
import '../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';


const Signin = () => {


    axios.defaults.withCredentials = true;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);
    const [loginStatus, setLoginStatus] = useState("");

    const { login } = useAuth();

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

    const fetchContractABI = async () => {
        const response = await axios.get('http://localhost:4000/getAuthContractABI');
        return response;

    }

    axios.defaults.withCredentials = true;
    const handleSignIn = async () => {
        if (!web3) {
            console.error('Web3 Not initialized');
            return;
        }
        login(email,password,account);

    }
    

const handleSignUp = () => {
    navigate("/signup");
}

return (
    <div className="signup-container">
        <div className="header">
            <div className="text"> Sign In</div>
        </div>
        <form >
            <div className='inputs'>
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
            <div className='forgot-password'>
                Forgot your password?
            </div>
            <div className='submitdiv'>
                <button type="button" onClick={handleSignIn} className='submit'>Sign In</button>
                <button type="button" onClick={handleSignUp} className='submit'>New User Click Here</button>
            </div>
        </form>
        <h1>{loginStatus}</h1>
        <Toaster />
    </div>
);
};

export default Signin;