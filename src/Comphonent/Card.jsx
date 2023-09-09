import React from 'react';
import Image from './Image';
import Info from './Info';

const Card = ({title}) => {
    return (
       
    <div className="card w-full bg-base-100 shadow-xl">
        <Image></Image>
        <Info title={title}></Info>
    </div>
    );
};

export default Card;