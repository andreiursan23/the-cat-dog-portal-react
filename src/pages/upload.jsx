import React, { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();

  const handleInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleSubmit = () => {
    const formData = new FormData();
		formData.append('file', selectedFile);

    fetch(
			'https://api.thecatapi.com/v1/images/upload',
			{
				method: 'POST',
				body: formData,
        headers: {
          Accept: 'application/json',
          'x-api-key': '35537048-2b8d-455c-a1e4-c22d40e5bdc1' 
        }
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }

  return (
    <>
      <div className="container mt-5">
        <div>
          <label htmlFor="formFileLg" className="form-label">Upload new image</label>
          <input onChange={handleInput} className="form-control form-control-lg" id="formFileLg" type="file" />
        </div>
        <button onClick={handleSubmit} type="button" className="btn btn-primary mt-3">Submit</button>
      </div>
    </>
  )
  
};

export default Upload;
