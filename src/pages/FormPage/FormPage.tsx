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
  const [customHeroesArr, setCustomHeroesArr] = useState<CustomCardProps[]>([]);
  const [showForm, setShowForm] = useState(false);
  const methods = useForm({ mode: 'onSubmit' });
  const { reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    customHeroesArr.push({
      heroName: data.heroName,
      heroTypeAttack: data.heroTypeAttack,
      heroImage: URL.createObjectURL(data.heroImage[0]),
      heroRole: data.heroRole,
      heroAttribute: data.heroAttribute,
      heroDate: data.heroDate,
      heroAgree: data.heroAgree,
      id: customHeroesArr.length,
    });

    setCustomHeroesArr(customHeroesArr);

    setShowForm(true);

    setTimeout(() => {
      setShowForm(false);
    }, 4000);

    reset();
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
            <AcceptForm />
            <ValidteForm />
          </form>
        </FormProvider>
      </div>
      <div className="cards" data-testid="cards">
        {customHeroesArr.map((card) => (
          <CustomCard
            key={card.id}
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
