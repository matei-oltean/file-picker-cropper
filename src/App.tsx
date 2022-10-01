import React from "react";
import AvatarImageCropper from "react-avatar-image-cropper";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function App() {
  const [images, setImages] = React.useState<File[]>([]);
  const apply = (file) => {
    setImages([...images, file]);
  };

  const zipFiles = () => {
    var zip = new JSZip();
    var img = zip.folder("images");
    for (let i = 0; i < images.length; ++i) {
      img.file(`img-${i}.png`, images[i]);
    }
    img
      .generateAsync({ type: "blob" })
      .then((content) => saveAs(content, "images"));
    setImages([]);
  };

  return (
    <div>
      <div>
        <div style={{ width: "512px", height: "512px", margin: "auto" }}>
          <AvatarImageCropper apply={apply} />
        </div>
      </div>
      <div>
        {images.map((file: File) => (
          <img src={URL.createObjectURL(file)} height={128} />
        ))}
      </div>
      <button onClick={zipFiles}>Download</button>
    </div>
  );
}

export default App;
