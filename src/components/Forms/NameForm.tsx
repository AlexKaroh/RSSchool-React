import React from 'react';
import { useFormContext } from 'react-hook-form';

const NameForm: React.FC = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form__flex padding">
      <label className="form__flex_font label__margin">Hero Name : </label>
      <input
        type="text"
        {...register('heroName', {
          required: 'Field mustn`t be empty',
          minLength: {
            value: 2,
            message: 'Name should contain at least 2 letters',
          },
          pattern: {
            value: /^[A-Z][a-z]*$/,
            message: 'Field mustn`t contain numbers, symbols and start with a capital letter',
          },
        })}
        className="input_text label__margin"
        data-testid="name_input"
      />
      {errors.heroName && <div className="wrong">{errors.heroName.message?.toString()}</div>}
    </div>
  );
};

export default NameForm;
