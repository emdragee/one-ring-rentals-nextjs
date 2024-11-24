import React from 'react';

const Guide = ({ name, location, image, description, pdfbrochure, source, imageClass }) => {
  return (
    <div className="item col-md-4">
      <div className="image">
        {pdfbrochure && (
          <a href={pdfbrochure} className="btn btn-default download-btn" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-file-pdf-o"></i> PDF Viewer
          </a>
        )}
        <img className={imageClass} src={image} alt={`${name}`} />
      </div>
      <div className="tag">
        <i className="fa fa-file-pdf-o"></i>
      </div>
      <div className="info-blog">
        <h3>
          <a href="#">{location} - {name}</a>
        </h3>
        <p>{description}</p>
        {source && (
          <p>
            Photo by <a href={source.photographerUrl} target="_blank" rel="noopener noreferrer">{source.photographer}</a> on <a href={source.imageUrl} target="_blank" rel="noopener noreferrer">Unsplash</a>
          </p>
        )}
        {pdfbrochure && (
          <a href={pdfbrochure} download className="btn btn-default download-btn">
            <i className="fa fa-file-pdf-o"></i> Download PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default Guide;
