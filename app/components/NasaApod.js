'use client'
import React from 'react';
const NasaApod = () => {
    const [apodData, setApodData] = React.useState([]);
  
    React.useEffect(() => {
      const requestOptions = {
        method: 'GET',
      };
  
      const params = {
        api_key: mykey,
        count: 3,
      };
  
      const esc = encodeURIComponent;
      const query = Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');
  
      fetch(`https://api.nasa.gov/planetary/apod?${query}`, requestOptions)
        .then(response => response.json())
        .then(data => setApodData(data))
        .catch(error => console.log('error', error));
    }, []);
  
    const filteredApodData = apodData.filter(
      apodItem => apodItem.url && apodItem.url.trim() !== ''
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
                    onError={(e) => { e.target.src = 'images/placeholder.png'; }}
                />

                <ul className="nasa-top-info" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li><i className="fa fa-calendar"></i> {apodItem.date}</li>
                    <li>
                    <i className="fa fa-tags"></i>
                    <a href={apodItem.url} target="_blank">
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
  
  // NasaGrid component
  const NasaGrid = () => {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">NASA APOD</h1>
              <div className="grid-style1 row">
                <NasaApod />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default NasaApod