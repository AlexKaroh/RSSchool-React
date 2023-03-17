import React from 'react';
import './FormPage.css';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';
import IForm from 'interfaces/IForm';
import IEvent from '../../interfaces/IEvent';

class FormPage extends React.Component<object, IForm> {
  constructor(props: object) {
    super(props);
    this.handleClickTypeAttack = this.handleClickTypeAttack.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.state = {
      typeAttack: true,
      agree: false,
      imageUrl: '',
    };
  }

  textInput = React.createRef<HTMLInputElement>();
  selectInput = React.createRef<HTMLSelectElement>();
  dateInput = React.createRef<HTMLInputElement>();

  handleImageUpload(e: IEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.setState({
        imageUrl: e.target?.result,
      });
    };

    reader.readAsDataURL(file);
  }

  handleClickTypeAttack() {
    this.setState((prevState) => ({
      typeAttack: !prevState.typeAttack,
    }));
  }

  handleClickAgree() {
    this.setState((prevState) => ({
      agree: !prevState.agree,
    }));
  }

  showResult = () => {
    console.log(this.textInput.current?.value);
    console.log(this.selectInput.current?.value);
    console.log(this.state.typeAttack);
    console.log(this.dateInput.current?.value);
    console.log(this.state.agree);
    console.log(this.state.imageUrl);
  };

  render() {
    return (
      <div className="FormPage">
        <div className="form__container">
          <form className="form" onSubmit={() => console.log('submit')}>
            <div className="form__text">
              <label>Hero Name : </label>
              <input type="text" ref={this.textInput} className="input_text" />
            </div>
            <div className="form__select">
              <label>Hero Attribute : </label>
              <select ref={this.selectInput}>
                <option value="Agility">Agility</option>
                <option value="Stength">Stength</option>
                <option value="Intelligence">Intelligence</option>
              </select>
            </div>
            <div className="form__switcher">
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
            <div className="form__date">
              <label>Date of creation : </label>
              <input type="date" ref={this.dateInput} />
            </div>
            <div className="form__file">
              <label>Hero image </label>
              <input type="file" accept="image/png, image/jpeg" onChange={this.handleImageUpload} />
            </div>
            <div className="form__checkbox">
              <label>I consent to use of my data</label>
              <input type="checkbox" onClick={() => this.handleClickAgree()} />
            </div>
            <input
              type="button"
              value="Create Hero"
              className="form__submit"
              onClick={() => this.showResult()}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default FormPage;
