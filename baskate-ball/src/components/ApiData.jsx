import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
        setUniversities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Universities:</h2>
      <ul>
        {universities.map((university, index) => (
          <li key={index}>
            <strong>Name:</strong> {university.name} | <strong>Country:</strong> {university.country} | <strong>Domain:</strong> {university.domains}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
