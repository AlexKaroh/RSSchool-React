import React from 'react';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';

const TypeOfAttackForm: React.FC<{
  typeAttack: boolean;
  setTypeAttack: (typeAttack: boolean) => void;
}> = ({ typeAttack, setTypeAttack }) => {
  const handleClickTypeAttack = () => {
    setTypeAttack(!typeAttack);
  };

  return (
    <div className="form__switcher padding">
      <label>Type of attack : </label>
      <span>
        {' '}
        <img src={rangedIco} alt="rangedIco" /> Ranged
      </span>
      <label className="switch">
        <input type="checkbox" onClick={handleClickTypeAttack} data-testid="typeAttackButton" />
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
