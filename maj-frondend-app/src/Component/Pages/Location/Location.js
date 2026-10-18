
import  { useState } from "react";
import "./Location.css";
import Logo from "../../Images/images-removebg-preview.png";

function Location() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <section id="location" className="location-section">
      <h2>Our Location</h2>

      <div className="map-container">
        {isLoading && (
          <div className="map-loading">
            <img
              src={Logo}
              alt="MAJ Gold logo"
              className="loading-image"
            />
            <p>Loading location...</p>
          </div>
        )}

        {hasError ? (
          <p>Unable to display the map. Please try again.</p>
        ) : (
          <iframe
            title="MAJ Gold Location"
            src="https://www.google.com/maps?q=13.0319112,80.2341449&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="eager"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>
    </section>
  );
}

export default Location;