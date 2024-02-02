import React, { useState } from 'react';
import '../assets/css/Signup.css';
const AddServiceForm = () => {

    const [serviceName, setServiceName] = useState("");
    const [serviceOverview, setServiceOverview] = useState("");
    const [serviceProvider, setServiceProvider] = useState("");
    const [projectURL, setProjectURL] = useState("");
    const [serviceID, setServiceID] = useState("");
    const [contributors, setContributors] = useState("");
    
    const resetForm = () => {
        setContributors("");
        setProjectURL("");
        setServiceID("");
        setServiceName("");
        setServiceOverview("");
        setServiceProvider("");
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
                    <div className="input">
                        <input
                            type="text"
                            id="ServiceID"
                            placeholder="Service ID"
                            value={serviceID}
                            onChange={(e) => setServiceID(e.target.value)}
                            required
                            className='input'
                        />
                    </div>
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
                </div>
                <div className='submitdiv'>
                    <button type="button" className='submit'>Submit Service</button>
                    <button type="button" onClick={resetForm}  className='submit'>Clear Form</button>
                </div>
            </form>
        </div>
    )
}
export default AddServiceForm;