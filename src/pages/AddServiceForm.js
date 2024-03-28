import React, { useState,useEffect } from 'react';
import '../assets/css/Signup.css';
import { Link ,useNavigate} from 'react-router-dom';
import ipfsHttpClient from 'ipfs-http-client';
import Web3 from 'web3';
import axios from 'axios';


const AddServiceForm = () => {

    const navigate = useNavigate();
    const [serviceName, setServiceName] = useState("");
    const [serviceOverview, setServiceOverview] = useState("");
    const [serviceProvider, setServiceProvider] = useState("");
    const [projectURL, setProjectURL] = useState("");
    // const [serviceID, setServiceID] = useState("");
    const [contributors, setContributors] = useState("");

    const [file, setFile] = useState(null);
    const [ipfsHash, setIpfsHash] = useState('');
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);

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
        const response = await axios.get('http://localhost:4000/getaiServiceContractABI');
        return response;

    }


    const resetForm = () => {
        setContributors("");
        setProjectURL("");
        // setServiceID("");
        setServiceName("");
        setServiceOverview("");
        setServiceProvider("");
    }

    const handleFileUpload = (event) => {
        
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        console.log("Uploaded file");
    }

    const handleUpload = async(event) => {
        event.preventDefault();
        //Create IPFS instance
        const ipfs = ipfsHttpClient('http://127.0.0.1:5001/');
        try {
            for await (const result of ipfs.add(file)) {
                console.log(result);
                setIpfsHash(result.path);
                console.log(ipfsHash);
            }
            
        }
        catch (error) {
            console.error("Error: " , error)
        }

    }

    const handleSubmit = async () => {
        if (!web3) {
            console.error('Web3 Not initialized');
            return;
        }
        try {
            let aiServiceContractABI = await fetchContractABI();
            aiServiceContractABI = aiServiceContractABI.data;
            console.log(aiServiceContractABI);
            let aiServiceContractAddress = await fetchContractAddress();
            aiServiceContractAddress = aiServiceContractAddress.data.AIServiceAddress;
            // Check if ABI is an array
            if (!Array.isArray(aiServiceContractABI)) {
                throw new Error("ABI is not an array");
            }

            // Check if contract address is valid
            if (!web3.utils.isAddress(aiServiceContractAddress)) {
                throw new Error("Invalid contract address");
            }
            const contract = new web3.eth.Contract(aiServiceContractABI, aiServiceContractAddress);

            const gas = 5000000 ;
            await contract.methods.addService(
                serviceName,
                serviceOverview,
                serviceProvider,
                ipfsHash,
                projectURL,
                // serviceID,
                contributors)
                .send({ from: account,gas});
            console.log(await contract.methods.getAllServices().call());
            console.log('Signup successful! User details stored on blockchain.');
            navigate('/aimarketplace');
        }
        catch (error) {
            console.error('Error:', error);
        }

    }
    
    return (
        <div className="signup-container">
            <div className="header">
                <div className="text"> Add AI Service</div>
            </div>
            <form>
                <div className='inputs'>
                    <div className="input">
                        <input
                            type="text"
                            id="ServiceName"
                            placeholder="Service Name"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="ServiceOverview"
                            placeholder="Service Overview"
                            value={serviceOverview}
                            onChange={(e) => setServiceOverview(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="ServiceProvider"
                            placeholder="Service Provider"
                            value={serviceProvider}
                            onChange={(e) => setServiceProvider(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="ProjectURL"
                            placeholder="Project URL"
                            value={projectURL}
                            onChange={(e) => setProjectURL(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
                    {/* <div className="input">
                        <input
                            type="text"
                            id="ServiceID"
                            placeholder="Service ID"
                            value={serviceID}
                            onChange={(e) => setServiceID(e.target.value)}
                            required
                            className='input'
                        />
                    </div> */}
                    <div className="input">
                        <input
                            type="text"
                            id="Contributors"
                            placeholder="Contributors"
                            value={contributors}
                            onChange={(e) => setContributors(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
                    <div className="input">
                        <input type="file" onChange={handleFileUpload} accept=".ipynb" />
                        <button type="button" className='submit' onClick={handleUpload}>Upload to IPFS</button>
                        
                    </div>
                </div>
                <div className='submitdiv'>
                    <button type="button" className='submit' onClick={handleSubmit}>Submit Service</button>
                    <button type="button" onClick={resetForm}  className='submit'>Clear Form</button>
                </div>
            </form>
        </div>
    )
}
export default AddServiceForm;