import React from 'react';
import '../assets/css/AboutUs.css';
import ProfileCard from '../components/ProfileCard';
import Profile from '../assets/images/profile.png';

const AboutUs = () => {
    return (
        <div className="background">
            <ProfileCard
                name="Sameer Bramhecha"
                college="PICT"
                city="Pune"
                image={Profile}
                linkedIn="https://www.linkedin.com/in/sameer-b-103912129/"
                github="https://github.com/SameerBramhecha"
            ></ProfileCard>
            
            <ProfileCard
                name="Aditi Chavan"
                college="PICT"
                city="Pune"
                image={Profile}
                linkedIn="https://www.linkedin.com/in/aditi-chavan-439b44206/"
                github="https://github.com/AditiChavan16"
            ></ProfileCard>

            <ProfileCard
                name="Shreya Sandankar"
                college="PICT"
                city="Pune"
                image={Profile}
                linkedIn="https://www.linkedin.com/in/shreya-sandankar-2970b1215/"
                github="https://github.com/ShreyaGit-2021"
            ></ProfileCard>
            
            <ProfileCard
                name="Deves Patil"
                college="PICT"
                city="Pune"
                image={Profile}
                linkedIn="https://www.linkedin.com/in/devespatil2872/"
                github="https://github.com/Deves2872"
            ></ProfileCard>
        </div>
    )
}

export default AboutUs;