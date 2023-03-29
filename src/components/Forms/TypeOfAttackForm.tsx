import React from 'react';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';
import { useFormContext } from 'react-hook-form';

const TypeOfAttackForm: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div className="form__switcher padding">
      <label>Type of attack : </label>
      <span>
        {' '}
        <img src={rangedIco} alt="rangedIco" /> Ranged
      </span>
      <label className="switch">
        <input type="checkbox" {...register('heroTypeAttack')} data-testid="typeAttackButton" />
        <span className="slider round"></span>
      </label>
      <span>
        {' '}
        <img src={meleeIco} alt="meleeIco" /> Melee
      </span>
    </div>
  );
};

export default TypeOfAttackForm;
