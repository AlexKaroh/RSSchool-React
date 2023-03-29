import React from 'react';
import { useFormContext } from 'react-hook-form';

const ImageForm: React.FC = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form__flex">
      <label>Hero image </label>
      <input
        type="file"
        {...register('heroImage', {
          required: 'You must to upload image',
        })}
        accept="image/png, image/jpeg"
      />
      {errors.heroImage && <div className="wrong">{errors.heroImage.message?.toString()}</div>}
    </div>
  );
};

export default ImageForm;
