import React, { ChangeEventHandler, useRef } from "react";
import AvatarImageCropper from 'react-avatar-image-cropper';
import "./App.css";

function App() {
  const [images, setImages] = React.useState<string[]>([]);
  const apply = (file) => {
    // handle the blob file you want
    // such as get the image src
    var src = URL.createObjectURL(file);
    setImages([...images, src]);
  }
  // const fileInput = useRef(null)
  // const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const newImages = [...images, event.target.files[0]];
  //   setImages(newImages);
  // };
  return (
    <div>
      <div>
        {/* <button
          className="upload-btn"
          onClick={() => fileInput.current.click()}
        >
          Choose PNG File
        </button> */}
        {/* <input
          type="file"
          id="image_uploads"
          ref={fileInput}
          onChange={onChangeHandler}
          accept=".png"
          style={{ display: "none" }}
        /> */}
        <div style={{width:'512px',height:'512px',margin:'auto'}}>
        <AvatarImageCropper apply={apply} />
        </div>
      </div>
      <div>
        {images.map((src: string) => (
          <img src={src} height={512} />
        ))}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
