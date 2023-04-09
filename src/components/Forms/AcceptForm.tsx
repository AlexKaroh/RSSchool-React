import React from 'react';
import { useFormContext } from 'react-hook-form';

const AcceptForm: React.FC = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form__checkbox padding">
      <label>I consent to use of my data</label>
      <input
        type="checkbox"
        {...register('heroAgree', {
          required: 'You must to agree',
        })}
        data-testid="agree"
      />
      {errors.heroAgree && <div className="wrong">{errors.heroAgree.message?.toString()}</div>}
    </div>
  );
};

export default AcceptForm;
