'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


const NasaApod = () => {
    const [apodData, setApodData] = React.useState([]);
  
    React.useEffect(() => {
      fetch('/api/nasa-apod?count=3')
        .then((response) => response.json())
        .then((data) => setApodData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    const filteredApodData = apodData.filter(
      (apodItem) => apodItem.url && apodItem.url.trim() !== ''
    );
  
    return (
      <div>
        {filteredApodData.length > 0 ? (
          filteredApodData.map((apodItem, index) => (
            <div key={index}>
              <div className="item col-md-8">
                <h2>{apodItem.title}</h2>
                <img
                  src={apodItem.url}
                  alt={apodItem.title}
                  style={{ width: '100%', height: 'auto' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder.png';
                  }}
                />
                <ul
                  className="nasa-top-info"
                  style={{ listStyleType: 'none', paddingLeft: 0 }}
                >
                  <li>
                    <i className="fa fa-calendar"></i> {apodItem.date}
                  </li>
                  <li>
                    <i className="fa fa-tags"></i>
                    <a href={apodItem.url} target="_blank" rel="noopener noreferrer">
                      {apodItem.url}
                    </a>
                  </li>
                </ul>
                <p>{apodItem.explanation}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No APOD found</p>
        )}
      </div>
    );
  };
  
  export default NasaApod;
  