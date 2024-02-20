
const data = [
  {
    id:1,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:2,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:3,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:4,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:5,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:6,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:7,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:8,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  },
  {
    id:9,
    image:workpng,
    title:"чиланзар",
    text:"Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году",
  }
]

import facebooksvg from '../public/facebook.svg'
import instagramsvg from '../public/instagram.svg'
import mailsvg from '../public/mail.svg'
import telegramsvg from '../public/telegram.svg'
import userpng from '../public/user.png'
import whatsupsvg from '../public/whatsup.svg'
import workpng from '../public/work.png'



function App() {
  return (
    <div>   <header className="header">
      <nav className="header__nav container">
        <a href="" className="header__logo">PROWEB</a>
        <ul className="header__list">
          <li className="header__item">
            <a href="" className="header__link">Обо мне</a>
          </li>
          <li class="header__item">
            <a href="" className="header__link">Мои работы</a>
          </li>
          <li class="header__item">
            <a href="" className="header__link">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className="header__content">
        <h1 className="header__title">Добро пожаловать на мой сайт</h1>
        <button className="header__button">Позвонить</button>
      </div>
    </header>
      <main>
        <section className="about">
          <div className="container">
            <h2 className="about__title">Обо мне</h2>
            <div className="about__content">
              <div className="about__left">
                <img src={userpng} alt="user"/> 
              </div>
              <div className="about__right">
                <p className="about__name">Зубенко Михаил Петрович</p>
                <p className="about__text">Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. </p>
              </div>
            </div>
          </div>
        </section>
        <section className="work">
          <div className="container">
            <h2 className="work__title">Мои работы</h2>
            <div className="work__content">
              {
              data.map((item)=>{
                return               <div className="work__box">
                <img src={item.image} alt="work" className="work__image"/>
                <h3 className="work__name">{item.title}</h3>
                <p class="work__text">{item.text}</p>
                <button className="work__button">Посмотреть</button>
              </div>
              })
}
            </div>
          </div>
        </section>
      </main><footer className="footer">
        <div className="container">
          <p className="footer__title">Связаться со мной</p>
          <div className="footer__contact">
            <a href="" className="footer__link">
              <img src={facebooksvg} alt="facebook"/> 
            </a>
            <a href="" className="footer__link">
              <img src={instagramsvg} alt="instagram"/> 
            </a>
            <a href="" className="footer__link">
              <img src={telegramsvg} alt="telegram"/> 
            </a>
            <a href="" className="footer__link">
              <img src={mailsvg} alt="mail"/>
            </a>
            <a href="" className="footer__link">
              <img src={whatsupsvg} alt="whatsup"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App