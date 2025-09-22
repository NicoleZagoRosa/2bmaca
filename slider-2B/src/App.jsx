import { useState } from 'react'
import './App.css'
import TenisNike from './assets/tenis-nike.jpg'
import superidol from './assets/download (1).jpg'
import CELLBIT from './assets/download (2).jpg'
import MACA from './assets/download (3).jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
      <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      classname="myswiper"
    >
      <SwiperSlide><img src={CELLBIT} alt="" className="img-prod"/></SwiperSlide>
      <SwiperSlide><img src={TenisNike} alt="" className="img-prod"/></SwiperSlide>
      <SwiperSlide> <img src={superidol} alt="" className="img-prod"/></SwiperSlide>
      <SwiperSlide><img src={TenisNike} alt="" className="img-prod"/></SwiperSlide>
      ...
    </Swiper></header>
        <section className="produtos">

          {/* Produto 1 */}
          <div className="card">
           <img src={MACA} alt="" className="img-prod"/>
            <h2>MAÇÃ</h2>
            <p className="desc">Uma maçã saborosa compactada no 7-zip.</p>
            <p className="preco">R$ 25,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
            <div className="off">- 15%</div>
          </div>

          <div className="card">
           <img src={TenisNike} alt="" className="img-prod"/>
            <h2>ABSOLUTE CINEMA</h2>
            <p className="desc">UM PÉ SEM TENIS.</p>
            <p className="preco">R$ 366,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
            <div className="off">- 15%</div>
          </div>

          <div className="card">
           <img src={CELLBIT} alt="" className="img-prod"/>
            <h2>CELLBIT!</h2>
            <p className="desc">Cellbit bald V1.</p>
            <p className="preco">R$ 1800,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★ </div>
            <div className="off">- 15%</div>
          </div>

          <div className="card">
           <img src={superidol} alt="" className="img-prod"/>
            <h2>IDOL</h2>
            <p className="desc">SUPER IDOL DISHAMO DO ME NI TAN KEN DAIE BOIE DI NA MON</p>
            <p className="preco">R$ 999.999.999,99</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★ </div>
            <div className="off">- 15%</div>
          </div>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
