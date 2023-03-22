import React from 'react';
import './FormPage.css';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';
import IForm from 'interfaces/IForm';
import IEvent from '../../interfaces/IEvent';
import CustomCard from '../../components/CustomCard/CustomCard';

class FormPage extends React.Component<object, IForm> {
  constructor(props: object) {
    super(props);
    this.handleClickTypeAttack = this.handleClickTypeAttack.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.state = {
      typeAttack: true,
      agree: false,
      imageUrl: '',
      role: '',
      customHeroesArr: [],
    };
  }

  textInput = React.createRef<HTMLInputElement>();
  selectInput = React.createRef<HTMLSelectElement>();
  dateInput = React.createRef<HTMLInputElement>();

  radioFirstInput = React.createRef<HTMLInputElement>();
  radioSecondInput = React.createRef<HTMLInputElement>();
  radioThirdInput = React.createRef<HTMLInputElement>();

  imageInput = React.createRef<HTMLInputElement>();
  agreeInput = React.createRef<HTMLInputElement>();

  handleImageUpload(event: IEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    const reader = new FileReader();

    reader.onload = (event) => {
      this.setState({
        imageUrl: event.target?.result,
      });
    };

    reader.readAsDataURL(file);
  }

  handleRadioChange() {
    const { radioFirstInput, radioSecondInput, radioThirdInput } = this;
    const role = radioFirstInput.current?.checked
      ? radioFirstInput.current.value
      : radioSecondInput.current?.checked
      ? radioSecondInput.current.value
      : radioThirdInput.current?.value;
    this.setState({ role });
  }

  handleClickTypeAttack() {
    this.setState((prevState) => ({
      typeAttack: !prevState.typeAttack,
    }));
  }

  handleClickAgree() {
    let flag = this.agreeInput.current?.checked;
    switch (flag) {
      case false:
        flag = true;
        break;
      case true:
        flag = false;
        break;
    }
    console.log(this.agreeInput.current?.checked);
  }

  showResult = () => {
    const date = new Date();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const currentDate = date.toLocaleDateString('en-US');
    const heroName = this.textInput.current?.value;
    const heroAttribute = this.selectInput.current?.value;
    const heroTypeAttack = this.state.typeAttack;
    const heroDate = this.dateInput.current?.value;
    const heroAgree = this.state.agree;
    const heroImage = this.state.imageUrl;
    const heroRole = this.state.role;
    (this.state.customHeroesArr as [object]).push({
      heroName: heroName,
      heroAttribute: heroAttribute,
      heroTypeAttack: heroTypeAttack,
      heroDate: heroDate,
      heroAgree: heroAgree,
      heroImage: heroImage,
      heroRole: heroRole,
      id: this.state.customHeroesArr.length,
    });
    console.log(this.state.customHeroesArr);
    this.setState({ customHeroesArr: this.state.customHeroesArr });
  };

  render() {
    return (
      <div className="FormPage">
        <div className="form__container">
          <form className="form" onSubmit={() => console.log('submit')}>
            <div className="form__text padding">
              <label>Hero Name : </label>
              <input type="text" ref={this.textInput} className="input_text" />
            </div>
            <div className="form__select padding">
              <label>Hero Attribute : </label>
              <select ref={this.selectInput}>
                <option value="">Select Attribute</option>
                <option value="Agility">Agility</option>
                <option value="Strength">Strength</option>
                <option value="Intelligence">Intelligence</option>
              </select>
            </div>
            <div className="form__switcher padding">
              <label>Type of attack : </label>
              <span>
                {' '}
                <img src={rangedIco} alt="rangedIco" /> Ranged
              </span>
              <label className="switch">
                <input type="checkbox" onClick={() => this.handleClickTypeAttack()} />
                <span className="slider round"></span>
              </label>
              <span>
                {' '}
                <img src={meleeIco} alt="meleeIco" /> Melee
              </span>
            </div>
            <div className="form__radio padding">
              <label>
                {' '}
                Role :
                <input
                  ref={this.radioFirstInput}
                  className="input_radio"
                  type="radio"
                  name="role"
                  value="Carry"
                  onChange={() => this.handleRadioChange()}
                />
                <label>Carry</label>
                <input
                  ref={this.radioSecondInput}
                  className="input_radio"
                  type="radio"
                  name="role"
                  value="Mid"
                  onChange={() => this.handleRadioChange()}
                />
                <label>Mid</label>
                <input
                  ref={this.radioThirdInput}
                  className="input_radio"
                  type="radio"
                  name="role"
                  value="Support"
                  onChange={() => this.handleRadioChange()}
                />
                <label>Support</label>
              </label>
            </div>
            <div className="form__date padding">
              <label>Date of creation : </label>
              <input type="date" ref={this.dateInput} />
            </div>
            <div className="form__file">
              <label>Hero image </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                ref={this.imageInput.current?.value}
                onChange={this.handleImageUpload}
              />
            </div>
            <div className="form__checkbox padding">
              <label>I consent to use of my data</label>
              <input
                type="checkbox"
                onClick={() => this.handleClickAgree()}
                ref={this.agreeInput}
              />
            </div>
            <input
              type="button"
              value="Create Hero"
              className="form__submit"
              onClick={() => this.showResult()}
            />
          </form>
        </div>
        <div className="cards">
          {this.state.customHeroesArr.map((card) => (
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
  }
}

export default FormPage;
