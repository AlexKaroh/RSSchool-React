import React from 'react';

const DateForm: React.FC<{ dateFormDirty: boolean; dateFormEmpty: boolean }> = ({
  dateFormDirty,
  dateFormEmpty,
}) => {
  return (
    <div className="form__flex padding">
      <label>Release date : </label>
      <input type="date" data-testid="date-button" className="input__margin" />
      {dateFormDirty && <div className="wrong">You must select the future date</div>}
      {dateFormEmpty && <div className="wrong">Date field mustn`t be epmty</div>}
    </div>
  );
};

export default DateForm;
