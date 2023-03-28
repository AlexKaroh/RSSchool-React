import React from 'react';

const TypeOfAttackForm: React.FC<{ roleFormDirty: boolean }> = ({ roleFormDirty }) => {
  const handleRadioChange = () => {};
  return (
    <div className="form__flex padding">
      <label className="input__margin">
        {' '}
        Role :
        <input
          className="input_radio"
          type="radio"
          name="role"
          data-testid="Carry"
          value="Carry"
          onChange={() => handleRadioChange()}
        />
        <label>Carry</label>
        <input
          className="input_radio"
          type="radio"
          name="role"
          data-testid="Mid"
          value="Mid"
          onChange={() => handleRadioChange()}
        />
        <label>Mid</label>
        <input
          className="input_radio"
          type="radio"
          name="role"
          data-testid="Support"
          value="Support"
          onChange={() => handleRadioChange()}
        />
        <label>Support</label>
      </label>
      {roleFormDirty && <div className="wrong">You must select role</div>}
    </div>
  );
};

export default TypeOfAttackForm;
