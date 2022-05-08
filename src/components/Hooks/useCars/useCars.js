import React, { useEffect, useState } from 'react';

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://rocky-refuge-71424.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return [cars, setCars]
};

export default useCars;