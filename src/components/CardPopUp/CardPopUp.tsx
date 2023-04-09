import React from 'react';
import './CardPopUp.css';
import IModalCardProps from 'interfaces/IModalCardProps';
import cross from '../../assets/cross.svg';

const CardPopUp: React.FC<IModalCardProps> = ({ modalActive, setModalActive, activeCardData }) => {
  return (
    <div
      className={modalActive ? 'modal activated' : 'modal'}
      onClick={() => setModalActive(false)}
      data-testid="modal"
    >
      <div
        className={modalActive ? 'modal__content activated' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={activeCardData![0].image} alt="hero card" />
        <div className="modal__content_container">
          <div className="modal__content_data">
            <span> Name: {activeCardData![0].name}</span>
            <span> Gender: {activeCardData![0].gender}</span>
            <span> Species: {activeCardData![0].species}</span>
            <span> Planet: {activeCardData![0].location?.name}</span>
            <span> Status: {activeCardData![0].status}</span>
            <span>
              {' '}
              Type: {activeCardData![0].type === '' ? 'Сreature' : activeCardData![0].type}
            </span>
          </div>
        </div>
        <img
          src={cross}
          alt="cross"
          className="modal__content_cross"
          onClick={() => setModalActive(false)}
        />
      </div>
    </div>
  );
};

export default CardPopUp;
