import { Button, Input } from 'antd';
import { icons, images } from '../../resources';
const { Search } = Input;
import { Carusel, Categoria, NavBar } from 'components/organisms';
import React from 'react';
import FooterNav from 'components/organisms/FooterNav';
import './Home.css';

const Home: React.FC = () => {
  const suffix = (
    <div className="market-search__search-btn">
      <Button type="primary">BUSCAR</Button>
    </div>
  );

  return (
    <div style={{
      background: '#EBEBEB'
    }}>

      <NavBar />

      <Carusel />

      <div style={{ marginLeft: 55, marginRight: 55}}>

        <div style={{ marginTop: 60 }}>
          <p className="text">Te ayudamos a encontrar todos tus</p>
          <p className="text">insumos en un solo lugar.</p>
        </div>



        <div className="market-search__search-and-menu">
          <div style={{ width: '40%' }}>
            <Search
              prefix={
                <img
                  style={{ width: 35, height: 35, marginRight: 10 }}
                  src={icons.search}
                />
              }
              placeholder={'¿Qué estás buscando?'}
              suffix={suffix}
            />
          </div>
        </div>



        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 60,
            gap: 40,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Categoria image={images.gatito} text={'OFERTAS'} />
          <Categoria image={images.gatoPerro} text={'PEQUEÑOS ANIMALES'} />
          <Categoria image={images.vaca} text={'GRANDES ANIMALES'} />
          <Categoria image={images.caballo} text={'EQUINOS'} />
        </div>



        <div
          style={{
            marginTop: 70,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: -190
          }}
        >
          <div>
            <p className="title-tienda">LA TIENDA AGRARIA MÁS COMPLETA</p>
            <p className="subtitle-tienda">
              Todo lo que necesitas para tu actividad agropecuaria a un solo
              click.
            </p>
            <ul>
              <li className="title-li">
                Encuentra insumos para todas tus necesidades.
              </li>
              <li className="title-li">
                Recibe tus productos en <strong>toda Argentina.</strong>
              </li>
              <li className="title-li">
                <strong>Factura electrónica</strong> de todas tus compras.
              </li>
              <li className="title-li">
                Si algún insumo no está en nuestra tienda,{' '}
                <strong style={{ color: '#1F53E4' }}>
                  te ayudadmos a conseguirlo
                </strong>
              </li>
            </ul>
            <div className="container-button__pedido-btn">
              <Button type="primary">HAZ TU PRIMER PEDIDO</Button>
            </div>
          </div>

          <div>
            <img src={images.vacas} />
            <div
              className="market-search__search-and-menu"
              style={{ position: 'relative', bottom: 230, right: 160 }}
            >
              <div style={{ width: 511 }}>
                <Search placeholder={'Providean'} suffix={suffix} />
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                bottom: 215,
                right: 50
              }}
              className='form'
            >
              <p className='item-providen'>Providen</p>
              <p className='item-providen' style={{ background: '#C4C4C480' }}>Providean Repro 12</p>
              <p className='item-providen'>Providean Viratec 5</p>
              <p className='item-providen'>Providean Carbunclo Bacteridiano</p>
            </div>
            <div style={{ position: 'relative', bottom: 440, left: 380 }}>
              <img style={{ width: 80 }} src={icons.mano} />
            </div>
          </div>
        </div>


        <div style={{
          // position: 'relative', bottom: 380, 
          display: 'flex', justifyContent: 'flex-end', paddingTop: 15, marginBottom: 20
        }}>
          <img style={{ borderColor: 'red', borderWidth: 2, border: 4 }} src={images.mediosPagos} />
        </div>


        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
          // position: 'relative', bottom: 380, 
          paddingTop: 55
        }}>
          <div>
            <img src={images.appAgro} />
          </div>
          <div>
            <p className="title-tienda">NUESTRA APLICACIÓN MÓVIL</p>
            <p className="subtitle-tienda">Disfruta de una mejor experiencia descargando nuestra app.
            </p>
            <ul>
              <li className="title-li">
                Todos los insumos que necesitas en un solo lugar.
              </li>
              <li className="title-li">
                Contáctanos, estamos para ayudarte.
              </li>
              <li className="title-li">
                Rastrea tus órdenes en todo momento.
              </li>
              <li className="title-li">
                Agrega recordatorios para comprar tus insumos recurrentes.
              </li>
            </ul>
            <div >
              <img src={icons.appStore} />
              <img src={icons.googlePlay} />
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
          paddingTop: 55,
          marginBottom: -140,
          // bottom: 380, position: 'relative'
        }}>
          <div style={{ paddingTop: 90 }}>
            <p className="title-tienda">SUSCRIPCIÓN DE OFERTAS</p>
            <p className="subtitle-tienda">
              Recibí todas nuestras ofertas de manera inmediata a tu correo electrónico.
            </p>
            <ul>
              <li className="title-li">
                Suscribite para recibir alertas en tu correo.
              </li>
              <li className="title-li">
                Selecciona la frecuencia que más te convenga.
              </li>
              <li className="title-li">
                Olvídate de estar buscando ofertas, nosotros lo hacemos por vos.
              </li>
            </ul>
            <div className="container-button__pedido-btn">
              <Button type="primary">SUSCRIBIRME</Button>
            </div>
          </div>
          <div>
            <img src={images.subscriber} />
          </div>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
          // paddingTop: 55,
          alignItems:'center'
        }}>
          <div>
            <img  src={images.discount} />
          </div>
          <div className='container-crea-tu-cuenta'>
            <p className='text-uno'>¡Crea tu cuenta ahora!</p>
            <p className='text-dos'>Crea tu cuenta en menos de 3 minutos y recibe en tu correo un cupón  por 15% de descuento en tu primer compra.</p>
            <div className="container-button__pedido-btn" >
              <Button type="primary">CREAR MI CUENTA</Button>
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default Home;
