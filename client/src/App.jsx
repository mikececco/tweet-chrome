// src/App.jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4567/api/data'); // Replace with your backend route
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>My React Extension</h1>
    </div>
  );
}

export default App;
