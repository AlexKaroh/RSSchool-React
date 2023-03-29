import React from 'react';
import { useFormContext } from 'react-hook-form';

const AttributeForm: React.FC = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="form__flex padding">
      <label className="form__flex_font">Hero Attribute : </label>
      <select
        className="input__margin"
        {...register('heroAttribute', {
          required: 'You must select an attribute',
        })}
      >
        <option value="">Select Attribute</option>
        <option value="Agility">Agility</option>
        <option value="Strength">Strength</option>
        <option value="Intelligence">Intelligence</option>
      </select>
      {errors.heroAttribute && (
        <div className="wrong">{errors.heroAttribute.message?.toString()}</div>
      )}
    </div>
  );
};

export default AttributeForm;
