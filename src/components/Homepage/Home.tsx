import React from 'react';
import Carosel from './BannerPage/Carosel';
import Demo from './Demo';
import Crad from './BannerPage/Crad';


const Home:React.FC = () => {
    return (
        <div className=''> 
            <Carosel/>
            <Crad/>
            <Demo/> 
    
        </div>
    );
};

export default Home;