import React, { useState } from 'react';
import ipfsHttpClient from 'ipfs-http-client';// Import IPFS library
// import blockchainAPI from 'blockchain-api'; // Import Blockchain API library

function FileUpload() {
    const [file, setFile] = useState(null);
    const [ipfsHash, setIpfsHash] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create IPFS instance
        const ipfsClient = ipfsHttpClient('http://127.0.0.1:5001/');
        let hash;
        try {
            for await (const result of ipfsClient.add(file)) {
                console.log(result);
                hash = result.path;
                setIpfsHash(hash);
            }
            console.log(hash);
            // console.log(ipfsResult);
            // Get IPFS hash
            // if (ipfsResult && ipfsResult.cid) {
            //     const ipfsHash = ipfsResult.cid.toString();
            //     setIpfsHash(ipfsHash);
            // } else {
            //     setErrorMessage('Failed to retrieve IPFS hash');
            // }
        } catch (error) {
            console.error('Error adding file to IPFS:', error);
            setErrorMessage('Error adding file to IPFS');
        }
    };

    return (
        <div>
            <h1>Upload IPython Notebook File</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileUpload} />
                <button type="submit">Upload to IPFS</button>
            </form>
            {ipfsHash && <p>IPFS Hash: {ipfsHash}</p>}
        </div>
    );
}

export default FileUpload;
