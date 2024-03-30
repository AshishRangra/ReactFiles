import React, { useRef } from "react";

function App() {
  const fileInputRef = useRef(null);
  const imageDisplayRef = useRef(null);

  const handleFileInputChange = () => {
    const file = fileInputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      imageDisplayRef.current.src = imageDataUrl;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
      <div>
        <img
          ref={imageDisplayRef}
          alt="Selected Image"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      </div>
    </div>
  );
}

export default App;
