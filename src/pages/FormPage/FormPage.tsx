import React from 'react';
import './FormPage.css';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';
import IForm from 'interfaces/IForm';
import CustomCard from '../../components/CustomCard/CustomCard';
import PopUp from '../../components/PopUp/PopUp';

class FormPage extends React.Component<object, IForm> {
  formRef: React.RefObject<HTMLFormElement>;
  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();
    this.handleClickTypeAttack = this.handleClickTypeAttack.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.state = {
      typeAttack: true,
      agree: false,
      imageUrl: '',
      role: '',
      customHeroesArr: [],
      nameFromDirty: false,
      nameFromEmpty: false,
      attributeFromDirty: false,
      roleFormDirty: false,
      dateFormDirty: false,
      dateFormEmpty: false,
      imageFormDirty: false,
      acceptFormDirty: false,
      showForm: false,
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

  currentDate = new Date();

  handleImageUpload() {
    const file = this.imageInput.current?.files![0];
    const url = URL.createObjectURL(file as Blob | MediaSource);
    this.setState({
      imageUrl: url,
    });
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
    const flag = this.agreeInput.current?.checked;
    this.setState({ agree: flag });
  }

  dateValidation = () => {
    const selectedDateVal = this.dateInput.current?.value;
    const selectedDate = new Date(selectedDateVal as unknown as Date);

    if (selectedDate.getTime() <= this.currentDate.getTime()) {
      this.setState({ dateFormDirty: true });
    } else this.setState({ dateFormDirty: false });

    if (selectedDateVal === '') {
      this.setState({ dateFormEmpty: true });
    } else this.setState({ dateFormEmpty: false });
  };

  nameValidation = () => {
    if (!this.textInput.current?.value.match(/^[A-Z][a-z]*$/)) {
      this.setState({ nameFromDirty: true, nameFromEmpty: false });
    } else this.setState({ nameFromDirty: false });

    if (this.textInput.current?.value === '') {
      this.setState({ nameFromEmpty: true, nameFromDirty: false });
    } else this.setState({ nameFromEmpty: false });
  };

  validateAllValues = () => {
    this.dateValidation();
    this.nameValidation();
    this.setState({
      attributeFromDirty: this.selectInput.current?.value === '',
      roleFormDirty: this.state.role === '',
      acceptFormDirty: !this.state.agree,
      imageFormDirty: this.state.imageUrl === '' ? true : false,
    });
  };

  checkValidation = () => {
    const selectedDateVal = this.dateInput.current?.value;
    const selectedDate = new Date(selectedDateVal as unknown as Date);

    this.validateAllValues();

    if (
      !this.state.agree ||
      !this.state.imageUrl ||
      !selectedDateVal ||
      selectedDate.getTime() <= this.currentDate.getTime() ||
      !this.state.role ||
      !this.selectInput.current?.value ||
      !this.textInput.current?.value.match(/^[A-Z][a-z]*$/)
    ) {
      return;
    }
    this.showResult();
  };

  zeroing = () => {
    this.formRef.current?.reset();
    this.setState({ imageUrl: '', agree: false, role: '' });
  };

  showMessage = () => {
    this.setState({ showForm: true });
    setTimeout(() => {
      this.setState({ showForm: false });
    }, 4000);
  };

  showResult = () => {
    (this.state.customHeroesArr as [object]).push({
      heroName: this.textInput.current?.value,
      heroAttribute: this.selectInput.current?.value,
      heroTypeAttack: this.state.typeAttack,
      heroDate: this.dateInput.current?.value,
      heroAgree: this.state.agree,
      heroImage: this.state.imageUrl,
      heroRole: this.state.role,
      id: this.state.customHeroesArr.length,
    });
    this.setState({ customHeroesArr: this.state.customHeroesArr });
    this.showMessage();
    this.zeroing();
  };

  render() {
    return (
      <div className="FormPage">
        <div className={this.state.showForm ? 'animation' : 'popup_container'}>
          {this.state.showForm && <PopUp />}
        </div>
        <div className="form__container">
          <form className="form" onSubmit={this.zeroing.bind(this)} ref={this.formRef}>
            <div className="form__flex padding">
              <label className="form__flex_font label__margin">Hero Name : </label>
              <input type="text" ref={this.textInput} className="input_text label__margin" />
              {this.state.nameFromEmpty && <div className="wrong">Field mustn`t be empty</div>}
              {this.state.nameFromDirty && (
                <div className="wrong">
                  Field mustn`t contain numbers, symbols and start with a capital letter
                </div>
              )}
            </div>
            <div className="form__flex padding">
              <label className="form__flex_font">Hero Attribute : </label>
              <select ref={this.selectInput} className="input__margin">
                <option value="">Select Attribute</option>
                <option value="Agility">Agility</option>
                <option value="Strength">Strength</option>
                <option value="Intelligence">Intelligence</option>
              </select>
              {this.state.attributeFromDirty && (
                <div className="wrong">You must select an attribute</div>
              )}
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
            <div className="form__flex padding">
              <label className="input__margin">
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
              {this.state.roleFormDirty && <div className="wrong">You must select role</div>}
            </div>
            <div className="form__flex padding">
              <label>Release date : </label>
              <input type="date" ref={this.dateInput} className="input__margin" />
              {this.state.dateFormDirty && (
                <div className="wrong">You must select the future date</div>
              )}
              {this.state.dateFormEmpty && <div className="wrong">Date field mustn`t be epmty</div>}
            </div>
            <div className="form__flex">
              <label>Hero image </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                ref={this.imageInput}
                onChange={this.handleImageUpload}
              />
              {this.state.imageFormDirty && <div className="wrong">You must to upload image</div>}
            </div>
            <div className="form__checkbox padding">
              <label>I consent to use of my data</label>
              <input
                type="checkbox"
                onClick={() => this.handleClickAgree()}
                ref={this.agreeInput}
              />
              {this.state.acceptFormDirty && <div className="wrong">You must to agree</div>}
            </div>
            <input
              type="button"
              value="Create Hero"
              className="form__submit"
              onClick={() => this.checkValidation()}
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
