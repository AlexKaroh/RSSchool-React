import React from 'react';

const AttributeForm: React.FC<{ attributeFromDirty: boolean }> = ({ attributeFromDirty }) => {
  return (
    <div className="form__flex padding">
      <label className="form__flex_font">Hero Attribute : </label>
      <select className="input__margin">
        <option value="">Select Attribute</option>
        <option value="Agility">Agility</option>
        <option value="Strength">Strength</option>
        <option value="Intelligence">Intelligence</option>
      </select>
      {attributeFromDirty && <div className="wrong">You must select an attribute</div>}
    </div>
  );
};

export default AttributeForm;
