import React, { ChangeEventHandler, useRef } from "react";
import "./App.css";

function App() {
  const [images, setImages] = React.useState<File[]>([]);
  const fileInput = useRef(null)
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newImages = [...images, event.target.files[0]];
    setImages(newImages);
  };
  return (
    <div>
      <div>
        <button
          className="upload-btn"
          onClick={() => fileInput.current.click()}
        >
          Choose PNG File
        </button>
        <input
          type="file"
          id="image_uploads"
          ref={fileInput}
          onChange={onChangeHandler}
          accept=".png"
          style={{ display: "none" }}
        />
      </div>
      <div>
        {images.map((src: File) => (
          <img src={URL.createObjectURL(src)} height={512} />
        ))}{" "}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
