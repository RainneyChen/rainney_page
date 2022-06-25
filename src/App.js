
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='topBanner'>
        <div className='title-left'>
          <div className='photo-content'>
            <img className='my-photo' src={process.env.PUBLIC_URL +"/img/myPic.jpg"} alt="myphoto"/>
          </div>
          <div className='title'>陳彥菁 (Rainney)</div>
          <div className='mail'>
            <img src={process.env.PUBLIC_URL +"/img/icon_location.png"} style={{'width':'16px','height':'16px','marginRight':'5px','marginTop':'5px'}} alt="mail to me"/>
            <span>Taoyuan City, Taiwan</span>
          </div>
          
        </div>
        <div className='title-right'>
          <p style={{'fontWeight':'bold'}}>前端軟體工程師/網頁前端/跨平台手機APP</p>
          <p>我是彥菁，致力於程式開發領域已10餘年，程式前後端都有涉略，目前是一名前端程式開發工程師，致力於智慧零售網頁開發工作，熟悉React、Vue、React-Native框架運用；
          有相當豐富的專案開發經驗與專業程式能力，相信未來不論是要面對新的系統開發工具，或是新的工作領域，我都能更快的上手，將其經驗做有效的發揮，並且更加精進。
          </p>
          <div>
          <a href="mailto:myemailaddress@gmail.com"><img src={process.env.PUBLIC_URL +"/img/icon_mail.png"} style={{'width':'20px','height':'20px','marginRight':'5px'}} alt="mail to me"/></a>
            <a href="https://www.linkedin.com/in/rainney"><img src={process.env.PUBLIC_URL +"/img/icon_linkedin.png"} style={{'width':'20px','height':'20px'}} alt="Link my Linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
