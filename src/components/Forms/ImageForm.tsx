/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const ImageForm: React.FC<{
  imageFormDirty: boolean;
  setImageUrl: (arg1: string) => void;
}> = ({ imageFormDirty, setImageUrl }) => {
  const handleImageUpload = () => {
    // setImageUrl();
  };
  return (
    <div className="form__flex">
      <label>Hero image </label>
      <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} />
      {imageFormDirty && <div className="wrong">You must to upload image</div>}
    </div>
  );
};

export default ImageForm;
