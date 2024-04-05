import React, { useEffect, useState } from 'react';
import Backimg from '../assets/images/backimg.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewServiceCard from '../components/ViewServiceCard.js';
const AboutServiceDashboard = (props) => {
    const { id } = useParams();

    const [service, setService] = useState({
        service_name: '',
        service_overview: '',
        service_details: '',
    });
    useEffect(() => {
        const fetchService = async () => {
            try {
                console.log("zyz", id);
                const response = await axios.get(`http://localhost:4000/getIndividualService/${id}`);
                console.log(response);
                if (response.status === 200) {
                    const service = response.data.data;
                    console.log(service)
                    setService(service);
                }
                else {
                    console.log("Error getting service")
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchService();
    }, []);

    return (
        <div>
            <ViewServiceCard
                imageSrc={Backimg}
                heading1={service.service_name}
                heading2="Overview"
                text={service.service_overview}
                projectURL={service.service_details.projectURL}
                organization={service.service_provider}
                contributors={service.service_details.service_contributors}
            />
        </div>
    );
}

export default AboutServiceDashboard;