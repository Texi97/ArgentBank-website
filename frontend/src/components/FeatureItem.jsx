import React from "react";

function FeatureItem({ title, text, src, alt }) {
  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-icon" loading="lazy" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;
