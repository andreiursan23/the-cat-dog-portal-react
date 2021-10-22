import React, { useState, useEffect } from "react";

const PublicImages = () => {
  const [type, setType] = useState(null);
  const [number, setNumber] = useState(3);
  const [category, setCategory] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, [])

  const fetchImgData = () => {
    fetch(
			`https://api.thecatapi.com/v1/images/search?limit=${number}&category_ids=${type}`,
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
        setImages(result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }

  const fetchCategory = () => {
    fetch(
			`https://api.thecatapi.com/v1/categories`,
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
        setCategory(result);
        setType(result[0].id);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }

  const displayImages = () => {
    fetchImgData();
  }

  const handleType = (e) => {
    setType(e.target.value);
  }

  const handleNumber = (e) => {
    setNumber(e.target.value);
  }

  if (type === null) return <><h1>Loading</h1></>

  return (
    <>
      <div className="container">
        <select onChange={handleType} className="form-select mt-3" aria-label="Default select example">
          {category.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
        <select onChange={handleNumber} className="form-select mt-3" aria-label="Default select example">
          <option value="3">3</option>
          <option value="9">9</option>
          <option value="15">15</option>
        </select>
        <button onClick={displayImages} type="button" className="btn btn-danger mt-3">Show images</button>

        <div className="row mt-5">
          {images.map((img) => (
            <div key={img.id} className="col-4 mt-3">
              <img src={img.url} className="img-fluid" alt="ceva2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicImages;
