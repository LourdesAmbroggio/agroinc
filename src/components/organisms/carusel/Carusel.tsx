import React from 'react';
import './Carusel.css';
import { icons, images } from '../../../resources';

const Carusel: React.FC = () => {
  return (
    <div className="container-carusel">
      <div className="container-carusel-arrow">
        <img style={{ background: '#e0e0e0', height: 120 }} src={icons.leftArrow} />
      </div>

      <div className="container-carusel-images">
        <div>
          <img src={images.promo} />
        </div>

        <div className="container-offer">
          <p className="text-hasta">HASTA</p>

          <div className="container-offer-value">
            <div className="vertical-line"></div>

            <p className="text-porcentaje">40%</p>
            <p className="text-off">OFF</p>
          </div>

          <p>
            Lea atentamente el rótulo. Prohibida su venta a menores de 18 años.
            Válido hasta el 29/10/2021
          </p>
        </div>
      </div>

      <div className="container-carusel-arrow">
        <img style={{ background: '#e0e0e0' }} src={icons.rightArrow} />
      </div>
    </div>
  );
};

export default Carusel;
