import React from 'react';

const Info = ({title}) => {
    return (
        <div>
         <div className="card-body">
          <h2 className="card-title">{title.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
    );
};

export default Info;