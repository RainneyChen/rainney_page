
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
          <div className='mail'>Senior Software Engineer</div>
          <div className='mail'>
            <div style={{'display':'flex','flexDirection':'row','alignItem':'center','height':'16px','marginTop':'10px'}}>
            <img src={process.env.PUBLIC_URL +"/img/icon_location.png"} style={{'width':'16px','height':'16px','marginRight':'5px'}} alt="mail to me"/>
            <div>Taoyuan City, Taiwan</div>
            </div>
          </div>
          
        </div>
        <div className='title-right'>
          <p style={{'fontWeight':'bold'}}>前端軟體工程師/網頁前端/跨平台手機APP</p>
          <p>我是彥菁，致力於程式開發領域已十餘年，程式前後端都有涉略，目前是一名前端程式開發工程師，致力於智慧零售網頁開發工作，
            熟悉React、Vue、React-Native框架運用。<br/>
          資訊社會來臨，每個人都需要與時俱進才能跟上時代潮流，進而開創新局面；因為對程式撰寫頗具興趣，加上喜歡學習不同新的事物，所以在學時對多種程式語言皆有初步的認識以及學習，培養良好的程式基礎，使我在職場上很有自信。另外，除了程式的撰寫上，也對醫學相關資是有基礎的瞭解，在大學期間也曾與醫院合作過護理計畫系統，在研究所的研究從事有關醫學影像的研究，藉由前三分工作，也有相當豐富的專案開發經驗與專業程式能力，相信未來不論是要面對新的系統開發工具，或是新的工作領域，我都能更快的上手，將其經驗做有效的發揮，並且更加精進。
          </p>
          <div>
          <a href="mailto:myemailaddress@gmail.com"><img src={process.env.PUBLIC_URL +"/img/icon_mail.png"} style={{'width':'20px','height':'20px','marginRight':'5px'}} alt="mail to me"/></a>
            <a href="https://www.linkedin.com/in/rainney"><img src={process.env.PUBLIC_URL +"/img/icon_linkedin.png"} style={{'width':'20px','height':'20px'}} alt="Link my Linkedin" /></a>
          </div>
        </div>
      </div>
      <span className='item-title'>技能 SKILL</span>
      <div className='skill-area'>
        <div className='skill-item'>
          <div className='skill-item-name'>Front-End</div>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>Javascript</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>HTML5</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>CSS/SCSS</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>Vuejs</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>React</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>React Native</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>C#</li>
        </div>
        <div className='skill-item'>
          <div className='skill-item-name'>Back-End</div>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>Nodejs</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>Python</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>MS-SQL</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>Postgres</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>MongoDB</li>
        </div>
        <div className='skill-item'>
          <div className='skill-item-name'>Tool</div>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>GitHub</li>
          <li style={{'lineHeight':'24px','paddingLeft':'5px'}}>SVN</li>
        </div>
      </div>
    </div>

  );
}

export default App;
