import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const PlottingData = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/wathare');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            {/* <button className='btn btn-success mt-4'>Check Location and Temperature</button>
            &nbsp;
            <button className='btn btn-success mt-4' onClick={fetchData}>Show Data</button> */}

            <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TimeStamp</th>
            <th scope="col">Machine status</th>
            <th scope="col">Vibration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.ts}</td>
              <td>{item.machine_status}</td>
              <td>{item.vibration}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    );
};

export default PlottingData;
