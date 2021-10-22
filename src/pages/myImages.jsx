import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MyImages = () => {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch(
			'https://api.thecatapi.com/v1/images?limit=10',
			{
				method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-api-key': '35537048-2b8d-455c-a1e4-c22d40e5bdc1' 
        }
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
        setAllImages(result)
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }

  const handleRemove = (imageId) => {
    fetch(
			`https://api.thecatapi.com/v1/images/${imageId}`,
			{
				method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'x-api-key': '35537048-2b8d-455c-a1e4-c22d40e5bdc1' 
        }
			}
		)
			.then((result) => {
				console.log('Success:', result);
        getImages();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <Carousel width={600}>
          {allImages.map((img) => (
            <div key={img.id}>
              <img src={img.url} alt="ceva" />
              <button onClick={() => handleRemove(img.id)} type="button" className="btn btn-danger mt-5 pt-5">Remove</button>
            </div>
          ))}
        </Carousel>
      </div>

    </>
  );
};

export default MyImages;
