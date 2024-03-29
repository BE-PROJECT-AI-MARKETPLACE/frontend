import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import '../assets/css/Requests.css';

const Requests = () => {

    const [userRequests, setUserRequests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getRequests');
                if (response.status === 200) {
                    const usrreq = response.data.data;
                
                    setUserRequests(usrreq);

                   
                } else {
                    console.log("Error displaying Request");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="request-container"> {/* Apply CSS class to the container */}
            <h1 className="request-header">Request Page</h1> {/* Apply CSS class to the header */}
            <Table striped bordered hover className="request-table"> {/* Apply CSS class to the table */}
                <thead>
                    <tr>
                        <th>Title:</th>
                        <th>Domain:</th>
                        <th>Description:</th>
                        <th>Status:</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {userRequests.length > 0 ? (
                        userRequests.map((item, index) => (
                            <tr key={index}>
                                <td>{item.serviceTitle}</td>
                                <td>{item.domain}</td>
                                <td>{item.description}</td>
                                <td>{item.isCompleted}</td>
        
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No requests available</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default Requests;
