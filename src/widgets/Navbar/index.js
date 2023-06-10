import React from 'react';
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <div>
                <Link to={'/'}>Главная</Link>
                <Link to={'/Anime'}>Аниме</Link>
            </div>
        </div>
    );
};

export default Index;