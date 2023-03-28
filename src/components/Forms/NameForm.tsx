import React from 'react';

const NameForm: React.FC<{ nameFromEmpty: boolean; nameFromDirty: boolean }> = ({
  nameFromEmpty,
  nameFromDirty,
}) => {
  return (
    <div className="form__flex padding">
      <label className="form__flex_font label__margin">Hero Name : </label>
      <input type="text" data-testid="name_input" className="input_text label__margin" />
      {nameFromEmpty && <div className="wrong">Field mustn`t be empty</div>}
      {nameFromDirty && (
        <div className="wrong">
          Field mustn`t contain numbers, symbols and start with a capital letter
        </div>
      )}
    </div>
  );
};

export default NameForm;
