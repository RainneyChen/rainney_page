
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
      <span className='item-title'>工作經歷 EXPIERENCE</span>
      <div style={{'width':'97%','height':'1px','borderBottom': '#2c3e50 2px solid','marginLeft':'20px'}}></div>
      <div className='exprience-area'>
        {workExpList}
      </div>
      <span className='item-title'>學歷 EDUCATION</span>
      <div style={{'width':'97%','height':'1px','borderBottom': '#2c3e50 2px solid','marginLeft':'20px'}}></div>
      <div className='exprience-area'>
        {educationList}
      </div>
    </div>

  );
}
const joblist = [{titleName:'Advantech AiCS, Senior Software Enginee, Taoyuan, Taiwan', date:'July 2015 - Present',
  detail:['Develop mobile application using React-Native.',
  'Develop web using Reactjs or Vuejs.', 
  'Design and create Winform UI application by using C#.',
  'Maintain Web page and web server by using Python and Apache',
  'Design and create Intelligent Dashboard for nursing station by using knockout.js',
  'Create RESTful API by using node.js and MongoDB.']},
  {titleName:'ClearDent, Technical Support and Marketing, Canada, BC', date:' Feb. 2014 - May 2014',
  detail:['Help client to resolve their problem of software.',
  'Design company website.', 
  'Design windows form application.']},
  {titleName:'RADEN Technology Corporation, Software Programmer, Taipei, Taiwan', date:'Jan 2009 - Sep 2013',
  detail:['Design and create function of dental software by using VS C# and MS-SQL.',
  'Design Crystal Report in C#.', 
  'Resolve the existed problem that required from dental offices.']}
  ];
const edulist =[{titleName:'Tzu Chi University, Master, Taiwan, Hualien', date:'July 2007 - July 2008',
detail:['Deparment: Science in Medical Information.',
'Training: Did a research of Neural Network Analysis Applied to Tumor Segmentation on 3D Breast Ultrasound Images and be a poster to present this research in conference of 2008 IEEE International Symposium on Biomedical Imaging: From Nano to Macro in France.']},
{titleName:'Tzu Chi University, Bachelor, Taiwan, Hualien', date:'July 2007 - July 2008',
 detail:['Deparment: Science in Medical Information.',
 'Training: Develop a system of Nursing Treatment plan system cooperatively with Mennonite Christian Hospital.']}
];
export default App;
