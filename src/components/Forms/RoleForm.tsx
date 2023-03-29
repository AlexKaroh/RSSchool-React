import React from 'react';
import { useFormContext } from 'react-hook-form';

const TypeOfAttackForm: React.FC = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form__flex padding">
      <label className="input__margin">
        {' '}
        Role :
        <input
          className="input_radio"
          type="radio"
          data-testid="Carry"
          value="Carry"
          {...register('heroRole', {
            required: 'You must select role',
          })}
        />
        <label>Carry</label>
        <input
          className="input_radio"
          type="radio"
          data-testid="Mid"
          value="Mid"
          {...register('heroRole', {
            required: 'You must select role',
          })}
        />
        <label>Mid</label>
        <input
          className="input_radio"
          type="radio"
          data-testid="Support"
          value="Support"
          {...register('heroRole', {
            required: 'You must select role',
          })}
        />
        <label>Support</label>
      </label>
      {errors.heroRole && <div className="wrong">{errors.heroRole.message?.toString()}</div>}
    </div>
  );
};

export default TypeOfAttackForm;
