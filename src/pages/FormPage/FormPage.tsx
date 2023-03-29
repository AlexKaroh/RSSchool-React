/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
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
import { useForm, FormProvider, SubmitHandler, FieldValues } from 'react-hook-form';

const FormPage: React.FC<IForm> = () => {
  const [heroName, setHeroName] = useState('');
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

  const methods = useForm({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="FormPage" data-testid="form">
      <div className={showForm ? 'animation' : 'popup_container'}>{showForm && <PopUp />}</div>
      <div className="form__container">
        <FormProvider {...methods}>
          <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <NameForm />
            <AttributeForm />
            <TypeOfAttackForm />
            <RoleForm />
            <DateForm />
            <ImageForm />
            <AcceptForm acceptFormDirty={acceptFormDirty} setAgree={setAgree} />
            <ValidteForm />
          </form>
        </FormProvider>
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
