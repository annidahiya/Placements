import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

function SliderDragAndDrop() {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://i.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU",
    },
    {
      id: 2,
      url: "https://i.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE",
    },
    {
      id: 3,
      url: "https://i.picsum.photos/id/235/200/300.jpg?hmac=CYa1eIuRJqKgRcWJs37--g8W4vCLpTZI_NDWcIRcyvk",
    },
    {
      id: 4,
      url: "https://i.picsum.photos/id/353/200/300.jpg?hmac=dp_gN1fPfq1NcUZmNjRXfOwD3UH0D4B8A-jwvjByOyc",
    },

    { id: 5, url: "https://picsum.photos/200/300" },

   
  ]);


  const App = () => {
    return (
      <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    );
  }

  
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const indexToMove = e.dataTransfer.getData("index");
    const newImages = [...images];
    const imageToMove = newImages[indexToMove];
    newImages.splice(indexToMove, 1);
    newImages.splice(index, 0, imageToMove);
    setImages(newImages);
  };

  return (
    <div>
      <h2>Drag and Drop</h2>
      <div className="drag-and-drop-box">
        {images.map((image, index) => (
          <div
            key={image.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
            className="drag-and-drop-item"
          >
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderDragAndDrop;
