
import './App.css';
import ExperienceList from './components/ExperienceList.js'
function App() {
  
  const workExpList = joblist.map((job,idx)=>{
    return <ExperienceList key={job.date} number={idx+1} content={job}/>
  });
  const educationList = edulist.map((edu,idx)=>{
    return <ExperienceList key={edu.date} number={idx+1} content={edu}/>
  });
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
      <div class="content">
          <div style={{'width':'50%'}}>
            <span className='item-title'>工作經歷 EXPIERENCE</span>
            <div style={{'width':'97%','height':'1px','borderBottom': '#2c3e50 2px solid','marginLeft':'20px'}}></div>
            <div className='exprience-area'>
              {workExpList}
            </div>
          </div>
          <div style={{'width':'50%'}}>
            <span className='item-title'>學歷 EDUCATION</span>
            <div style={{'width':'97%','height':'1px','borderBottom': '#2c3e50 2px solid','marginLeft':'20px'}}></div>
            <div className='exprience-area'>
              {educationList}
            </div>          
          </div>
      </div>
      <span className='item-title'>專案作品</span>
      <div style={{'width':'97%','height':'1px','borderBottom': '#2c3e50 2px solid','marginLeft':'20px'}}></div>
      <div className="project-area">
        <div className="pimg-div">
          <img className="project-img" src={process.env.PUBLIC_URL + '/img/project_12.png'} alt="myproject2"/>
        </div>
        <div  className='project-desc'>
          <span className="project-name">聽見孩子的聖誕心願 (家扶x錠律基金會外包案)</span>
          <div>
            <a href="https://github.com/RainneyChen/christmas_wish"><img src={process.env.PUBLIC_URL +"/img/icon_github.png"} style={{'width':'20px','height':'20px'}} alt="Link my Linkedin" /></a>
          </div>
          <div style={{'marginTop':'5px','fontSize':'16px','fontWeight':'bold'}}>專案說明</div>
          <div>使用GoDaddy架設此一頁式網站，使用javacript、jQuey、boostrap，製作RWD網頁，並使其能夠在手機上也能瀏覽無礙。<br/>
          協助這些弱勢家庭兒童，透過許願，讓使用者透過點選聖誕樹上的禮物，進而導向禮物捐贈頁，進行認購，完成他們的心願；聖誕樹會根據
          禮物的認領率，慢慢一層層的亮燈，直到所有禮物接任領完成，就會點亮最上方的星星。網站除了首頁外，還有其他四個頁面，上方有進入錨點，
          點擊即可向下捲動至該頁。
          </div>
          <div style={{'marginTop':'5px','fontSize':'16px','fontWeight':'bold'}}>專案實作心得</div>
          <div>此專案是我第一次從架站開始，從尋找相關架站空間和平台，到網頁整個製作，都由自己一手包辦，也從中獲得與以往都是架在單純網內環境的不同經驗；
          與業者和UI設計師溝通協調，還有將網頁運用在手機上的顯示，都是一次很特別的經驗。另外，此次完全沒有後端開發架設，因此也特別製作一簡單網頁連結文字檔，
          方便業者統計，計算禮物。因為這個網站的目的也相當不同，看著聖誕樹一天天被點亮，除了很有成就感之外，也覺得自己幫助到這些弱勢家庭的兒童，一步步地完成
          他們小小的心願。
          </div>
        </div>
      </div>
      <div style={{'marginTop':'20px'}}></div>
      <div className="project-area">
        <div className="pimg-div">
          <img className="project-img" src={process.env.PUBLIC_URL + "/img/iWard.png"} alt="myproject2"/>
        </div>
        <div  className='project-desc'>
          <span className="project-name">智慧病房－電子白板</span>
          <div>
            <a href="https://drive.google.com/file/d/0B4aNhyjxOoigM09nMU5TcEx4eEk/view?usp=sharing&resourcekey=0-oUUZw7QkGzyXyMYplCwQVA"><img src={process.env.PUBLIC_URL +"/img/icon_ppt.png"} style={{'width':'20px','height':'20px'}} alt="Link my Linkedin" /></a>
          </div>
          <div style={{'marginTop':'5px','fontSize':'16px','fontWeight':'bold'}}>專案說明</div>
          <div>使用javascript結合Knockout.js框架開發醫院護理站電子白板，顯示護理站的病床即時動態，護理排班．．．．．．等相關照護資訊。且因為不同案場，對於顯示
            都有不同需求，因此設計整個網頁架構，可以透過設定檔，或後台組態派送來並更版型和顯示資料內容，已達成各種不同需求；另外，也提供簡易的方式，可以快速地內
            嵌其他網頁，讓他在看板上以方夜行是顯示。<br/>
          此外，在此專案開發時也有協助使用nodejs結合MongoDB的後端API的開發及維護工作，並負責打包發版工作。另外，也負責資料的介接程式撰寫，使用C# winform程式，
          將醫院資料倒入到智慧病房系統中。
          </div>
          <div style={{'marginTop':'5px','fontSize':'16px','fontWeight':'bold'}}>專案實作心得</div>
          <div>因為使用端為醫院場域，所以其環境封閉性相對較高且嚴格，其中必須克服許多偵錯及網路環境問題，和使用者大多數對電腦相關使用並不熟悉的問題；此外，因為每
            個案場需求都不盡相同，因此網頁內容也需要更多彈性，來解實作各種要求，因此讓程式更加模組化，套件化，也是這個專案的重要課題。
          </div>
        </div>
      </div>
      <div style={{'marginTop':'20px'}}></div>
      <div className="project-area">
        <div className="pimg-div">
          <img className="project-img" src={process.env.PUBLIC_URL + "/img/iWard.png"} alt="myproject2"/>
        </div>
        <div  className='project-desc'>
          <span className="project-name">數位互動看板APP－SignageCMS</span>
          <div style={{'display':'flex','flexDirection':'row'}}>
            <a href="https://drive.google.com/file/d/0B4aNhyjxOoigM09nMU5TcEx4eEk/view?usp=sharing&resourcekey=0-oUUZw7QkGzyXyMYplCwQVA"><img src={process.env.PUBLIC_URL +"/img/icon_recording.png"} style={{'width':'20px','height':'20px'}} alt="App Demo" /></a>
            <a href="https://apps.apple.com/tw/app/signagecms-m/id1397150525"><img src={process.env.PUBLIC_URL +"/img/icon_app-store.png"} style={{'width':'20px','height':'20px','marginLeft':'5px'}} alt="download from app store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.immapp&hl=zh_TW&gl=US"><img src={process.env.PUBLIC_URL +"/img/icon_google-play.png"} style={{'width':'20px','height':'20px','marginLeft':'5px'}} alt="download from google play store" /></a>
          </div>
          <div style={{'marginTop':'5px','fontSize':'16px','fontWeight':'bold'}}>專案說明</div>
          <div>使用React-Native開發的跨平台手機APP程式。透過手機上傳檔案，選擇想要的排列方式，設定解析度大小，進行節目立即或預約派播；也可以同是對多點進行
            批次派播。此外，更能利用手機對原本已派播的節目進行插播，或是透過手機進行簡報等操作。
          </div>
          <div style={{'marginTop':'5px','fontSize':'16px','fontWeight':'bold'}}>專案實作心得</div>
          <div>這是一款需要與Client端電腦應用程式互動的手機APP，需要同時與Client端開發者密切溝通與合作；且因為是跨平台手機應用程式，需要根據不同手機廠牌或解析度
            做適應性調整。<br/>這個手機APP雖然不是我第一個使用 React-Native開發的跨平台App程式，但卻是第一個開發較為完整的APP，也是在此次學習APP上架等相關操作，在一項項關卡突破時，得到滿滿的成就感。
          </div>
        </div>
      </div>
    </div>
  );
}
const joblist = [{titleName:'研華智誠股份有限公司, 資深軟體工程師, 台灣, 桃園', date:'2015年7月- 現在仍在職',
  logo:'/img/icon_advantech.png',
  detail:['react 和 vue.js 串接RESTful API開發網頁前端開發產品。',
  '使用 Redux in react-native串接API開發Android和IOS手機APP的經驗。', 
  '使用Visual Studio C#進行軟體開發、設計及維護。',
  '使用javascript搭配knockout.js進行網頁前端開發實做。',
  '使用Apache搭配Python33設計開發及維護網路後端程式。',
  'node.js搭配mogodb實做RESTful API。',
  '具備PostgreSQL使用經驗。',
  '具備html、css開發經驗。',
  '具備PowerBI使用經驗。',
  '具備PHP with smarty 網頁開發經驗。'
  ]},
  {titleName:'ClearDent, 技術資源和行銷, 加拿大, 卑斯省', date:'2014年2月 - 2014年5月',
  logo:'/img/cleardent.png',
  detail:['協助客戶解決軟體上技術問題',
  '設計，開發公司網頁', 
  '設計，開發應用程式']},
  {titleName:'諾盾科技, 軟體工程師,  台灣, 台北', date:'2009年1月 - 2013年9月',
  logo:'/img/cd_chinese.jpg',
  detail:['使用VS C# and MS-SQL設計、開發牙醫軟體及系統維護。',
  'CrystalReport設計。', 
  '協助客戶轉移系統及資料轉換。',
  '軟體與資料庫整合應用。',
  'Visual Studio C#程式撰寫。'
]}
  ];
const edulist =[{titleName:'私立慈濟大學, 碩士, 台灣, 花蓮', date:'2007年7月 - 2008年7月',
logo:'/img/icon_tzu.png',
detail:['科系: 醫學資訊所',
'研究: 應用類神經網路在三維乳房超音波影像腫瘤之切割 ']},
{titleName:'私立慈濟大學, 學士, 台灣, 花蓮', date:'2003年9月 - 2007年6月',
  logo:'/img/icon_tzu.png',
 detail:['科系: 醫學資訊學系',
 '專題: 與門諾醫院合作開發之護理計畫系統']}
];
export default App;
