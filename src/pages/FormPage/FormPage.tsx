import React, { useRef, useState } from 'react';
import './FormPage.css';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';
import IForm from '../../interfaces/IForm';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomCardProps from '../../interfaces/ICustomCardProps';
import PopUp from '../../components/PopUp/PopUp';

const FormPage: React.FC<IForm> = () => {
  const [typeAttack, setTypeAttack] = useState(true);
  const [agree, setAgree] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [role, setRole] = useState('');
  const [customHeroesArr, setCustomHeroesArr] = useState<CustomCardProps[]>([]);
  const [nameFromDirty, setNameFromDirty] = useState(false);
  const [nameFromEmpty, setNameFromEmpty] = useState(false);
  const [attributeFromDirty, setAttributeFromDirty] = useState(false);
  const [roleFormDirty, setRoleFormDirty] = useState(false);
  const [dateFormDirty, setDateFormDirty] = useState(false);
  const [dateFormEmpty, setDateFormEmpty] = useState(false);
  const [imageFormDirty, setImageFormDirty] = useState(false);
  const [acceptFormDirty, setAcceptFormDirty] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const textInput = useRef<HTMLInputElement>(null);
  const selectInput = useRef<HTMLSelectElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const radioFirstInput = useRef<HTMLInputElement>(null);
  const radioSecondInput = useRef<HTMLInputElement>(null);
  const radioThirdInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const agreeInput = useRef<HTMLInputElement>(null);
  const currentDate = new Date();

  const handleImageUpload = () => {
    const file = imageInput.current?.files![0];
    const url = URL.createObjectURL(file as Blob | MediaSource);
    setImageUrl(url);
  };

  const handleRadioChange = () => {
    const role = radioFirstInput.current?.checked
      ? radioFirstInput.current.value
      : radioSecondInput.current?.checked
      ? radioSecondInput.current.value
      : radioThirdInput.current?.value;
    setRole(role as string);
  };

  const handleClickTypeAttack = () => {
    setTypeAttack(!typeAttack);
  };

  const handleClickAgree = () => {
    setAgree(agreeInput.current?.checked as boolean);
  };

  const dateValidation = () => {
    const selectedDateVal = dateInput.current?.value;
    const selectedDate = new Date(selectedDateVal as unknown as Date);

    if (selectedDate.getTime() <= currentDate.getTime()) {
      setDateFormDirty(true);
    } else setDateFormDirty(false);

    if (selectedDateVal === '') {
      setDateFormEmpty(true);
    } else setDateFormEmpty(false);
  };

  const nameValidation = () => {
    if (!textInput.current?.value.match(/^[A-Z][a-z]*$/)) {
      setNameFromDirty(true);
      setNameFromEmpty(false);
    } else setNameFromDirty(false);

    if (textInput.current?.value === '') {
      setNameFromDirty(false);
      setNameFromEmpty(true);
    } else setNameFromEmpty(false);
  };

  const validateAllValues = () => {
    dateValidation();
    nameValidation();
    setAttributeFromDirty(selectInput.current?.value === '');
    setRoleFormDirty(role === '');
    setAcceptFormDirty(!agree);
    setImageFormDirty(imageUrl === '' ? true : false);
  };

  const checkValidation = () => {
    const selectedDateVal = dateInput.current?.value;
    const selectedDate = new Date(selectedDateVal as unknown as Date);

    validateAllValues();

    if (
      !agree ||
      !imageUrl ||
      !selectedDateVal ||
      selectedDate.getTime() <= currentDate.getTime() ||
      !role ||
      !selectInput.current?.value ||
      !textInput.current?.value.match(/^[A-Z][a-z]*$/)
    ) {
      return;
    }
    showResult();
  };

  const zeroing = () => {
    formRef.current?.reset();
    setImageUrl('');
    setAgree(false);
    setRole('');
  };

  const showMessage = () => {
    setShowForm(true);
    setTimeout(() => {
      setShowForm(false);
    }, 4000);
  };

  const showResult = () => {
    customHeroesArr.push({
      heroName: textInput.current?.value,
      heroAttribute: selectInput.current?.value,
      heroTypeAttack: typeAttack,
      heroDate: dateInput.current?.value,
      heroAgree: agree,
      heroImage: imageUrl,
      heroRole: role,
      id: customHeroesArr.length,
    });
    setCustomHeroesArr(customHeroesArr);
    showMessage();
    zeroing();
  };
  return (
    <div className="FormPage" data-testid="form">
      <div className={showForm ? 'animation' : 'popup_container'}>{showForm && <PopUp />}</div>
      <div className="form__container">
        <form className="form" onSubmit={zeroing.bind(this)} ref={formRef}>
          <div className="form__flex padding">
            <label className="form__flex_font label__margin">Hero Name : </label>
            <input
              type="text"
              ref={textInput}
              data-testid="name_input"
              className="input_text label__margin"
            />
            {nameFromEmpty && <div className="wrong">Field mustn`t be empty</div>}
            {nameFromDirty && (
              <div className="wrong">
                Field mustn`t contain numbers, symbols and start with a capital letter
              </div>
            )}
          </div>
          <div className="form__flex padding">
            <label className="form__flex_font">Hero Attribute : </label>
            <select ref={selectInput} className="input__margin">
              <option value="">Select Attribute</option>
              <option value="Agility">Agility</option>
              <option value="Strength">Strength</option>
              <option value="Intelligence">Intelligence</option>
            </select>
            {attributeFromDirty && <div className="wrong">You must select an attribute</div>}
          </div>
          <div className="form__switcher padding">
            <label>Type of attack : </label>
            <span>
              {' '}
              <img src={rangedIco} alt="rangedIco" /> Ranged
            </span>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => handleClickTypeAttack()}
                data-testid="typeAttackButton"
              />
              <span className="slider round"></span>
            </label>
            <span>
              {' '}
              <img src={meleeIco} alt="meleeIco" /> Melee
            </span>
          </div>
          <div className="form__flex padding">
            <label className="input__margin">
              {' '}
              Role :
              <input
                ref={radioFirstInput}
                className="input_radio"
                type="radio"
                name="role"
                data-testid="Carry"
                value="Carry"
                onChange={() => handleRadioChange()}
              />
              <label>Carry</label>
              <input
                ref={radioSecondInput}
                className="input_radio"
                type="radio"
                name="role"
                data-testid="Mid"
                value="Mid"
                onChange={() => handleRadioChange()}
              />
              <label>Mid</label>
              <input
                ref={radioThirdInput}
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
          <div className="form__flex padding">
            <label>Release date : </label>
            <input
              type="date"
              ref={dateInput}
              data-testid="date-button"
              className="input__margin"
            />
            {dateFormDirty && <div className="wrong">You must select the future date</div>}
            {dateFormEmpty && <div className="wrong">Date field mustn`t be epmty</div>}
          </div>
          <div className="form__flex">
            <label>Hero image </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              ref={imageInput}
              onChange={handleImageUpload}
            />
            {imageFormDirty && <div className="wrong">You must to upload image</div>}
          </div>
          <div className="form__checkbox padding">
            <label>I consent to use of my data</label>
            <input type="checkbox" onClick={() => handleClickAgree()} ref={agreeInput} />
            {acceptFormDirty && <div className="wrong">You must to agree</div>}
          </div>
          <input
            type="button"
            value="Create Hero"
            className="form__submit"
            data-testid="submit-button"
            onClick={() => checkValidation()}
          />
        </form>
      </div>
      <div className="cards">
        {customHeroesArr.map((card) => (
          <CustomCard
            key={customHeroesArr.length}
            heroName={card.heroName}
            heroImage={card.heroImage}
            heroAttribute={card.heroAttribute}
            heroTypeAttack={card.heroTypeAttack}
            heroRole={card.heroRole}
            heroDate={card.heroDate}
          />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
