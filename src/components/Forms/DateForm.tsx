import React from 'react';
import { useFormContext } from 'react-hook-form';

const DateForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form__flex padding">
      <label>Release date : </label>
      <input
        type="date"
        {...register('heroDate', {
          required: 'Date field mustn`t be epmty',
          min: {
            value: new Date().toISOString().split('T')[0],
            message: 'You must select the future date',
          },
        })}
        data-testid="date-button"
        className="input__margin"
      />
      {errors.heroDate && <div className="wrong">{errors.heroDate.message?.toString()}</div>}
    </div>
  );
};

export default DateForm;
