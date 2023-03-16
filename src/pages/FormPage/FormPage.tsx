import React from 'react';
import './FormPage.css';
import meleeIco from '../../assets/melee.svg';
import rangedIco from '../../assets/ranged.svg';

class FormPage extends React.Component {
  render() {
    return (
      <div className="FormPage">
        <div className="form__container">
          <form className="form" onSubmit={() => console.log('submit')}>
            <div className="form__text">
              <label>Hero Name : </label>
              <input type="text" className="input_text" />
            </div>
            <div className="form__select">
              <label>Hero Attribute : </label>
              <select onChange={() => console.log('work')}>
                <option value="option1">Agility</option>
                <option value="option2">Stength</option>
                <option value="option3">Intelligence</option>
              </select>
            </div>
            <div className="form__switcher">
              <label>Type of attack : </label>
              <span>
                {' '}
                <img src={rangedIco} alt="rangedIco" /> Ranged
              </span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <span>
                {' '}
                <img src={meleeIco} alt="meleeIco" /> Melee
              </span>
            </div>
            <div className="form__date">
              <label>Date of creation: </label>
              <input type="date" />
            </div>
            <div className="form__file">
              <label>Hero image </label>
              <input type="file" accept="image/png, image/jpeg" />
            </div>
            <div className="form__checkbox">
              <label>I consent to use of my data</label>
              <input type="checkbox" />
            </div>
            <input type="submit" onSubmit={() => console.log('submit')} />
          </form>
        </div>
      </div>
    );
  }
}

export default FormPage;
