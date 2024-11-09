import React from "react";
import { useState, useEffect } from "react";
import { FaHeart, FaShare, FaDownload } from "react-icons/fa";

const Photos = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchphotos = async () => {
      setLoading(true);
      const clientId = '?client_id=GauZOwVdOyG_KtFNNaEEGcJWLh0Hi5DrIOdoKQ5-snM';
      const mainUrl = 'https://api.unsplash.com/photos/';
      try {
        const response = await fetch(`${mainUrl}?clientId = ${clientId}`);
        const data = await response.json();
        setPhotos(data);
        
      } catch (error) {
        
        console.log(error);
      }finally{
        setLoading(false);  
      }
    };
    fetchphotos();
  }, []);

  return (
    <main>
      <section className="photos">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          photos.map = ((photo) => (
            <article key={photo.id} className="photo">
              <img src={photo.urls.regular} alt={photo.altdescription} />
              <div className="photoinfo">
                <div className="photoheader">
                  <h4>{photo.user.name}</h4>
                  <button className="favouritebtn">
                    <FaHeart />
                  </button>
                </div>
                <div className="photoactions">
                  <p>
                    <FaHeart className="hearticon" />
                    {photo.likes}
                  </p>
                  <button className="sharebtn">
                    <FaShare />
                  </button>
                  <button className="downloadbtn">
                    <FaDownload />
                  </button>
                </div>
                <a href={photo.user.portfolio_url} className="profileimage">
                  <img
                    src={photo.user.profile_image.medium}
                    alt={photo.user.name}
                  />
                </a>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
};
export default Photos;
