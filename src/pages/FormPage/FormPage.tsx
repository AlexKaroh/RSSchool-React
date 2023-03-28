import React, { useRef, useState } from 'react';
import './FormPage.css';
import IForm from '../../interfaces/IForm';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomCardProps from '../../interfaces/ICustomCardProps';
import PopUp from '../../components/PopUp/PopUp';
import NameForm from '../../components/Forms/NameForm';
import AttributeForm from '../../components/Forms/AttributeForm';
import TypeOfAttackForm from '../../components/Forms/TypeOfAttackForm';
import RoleForm from '../../components/Forms/RoleForm';
import DateForm from '../../components/Forms/DateForm';
import ImageForm from '../../components/Forms/ImageForm';
import AcceptForm from '../../components/Forms/AcceptForm';
import ValidteForm from '../../components/Forms/ValidateForm';

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
  const currentDate = new Date();

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
          <NameForm nameFromEmpty={nameFromEmpty} nameFromDirty={nameFromDirty} />
          <AttributeForm attributeFromDirty={attributeFromDirty} />
          <TypeOfAttackForm typeAttack={typeAttack} setTypeAttack={setTypeAttack} />
          <RoleForm roleFormDirty={roleFormDirty} />
          <DateForm dateFormDirty={dateFormDirty} dateFormEmpty={dateFormEmpty} />
          <ImageForm imageFormDirty={imageFormDirty} setImageUrl={setImageUrl} />
          <AcceptForm acceptFormDirty={acceptFormDirty} setAgree={setAgree} />
          <ValidteForm />
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
