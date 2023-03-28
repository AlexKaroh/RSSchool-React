/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const AcceptForm: React.FC<{
  acceptFormDirty: boolean;
  setAgree: (arg: boolean) => void;
}> = ({ acceptFormDirty, setAgree }) => {
  const handleClickAgree = () => {
    // setAgree(agreeInput.current?.checked as boolean);
  };

  return (
    <div className="form__checkbox padding">
      <label>I consent to use of my data</label>
      <input type="checkbox" onClick={() => handleClickAgree()} />
      {acceptFormDirty && <div className="wrong">You must to agree</div>}
    </div>
  );
};

export default AcceptForm;
