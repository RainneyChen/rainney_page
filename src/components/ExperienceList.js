import React, { useState } from "react";
function ExperienceList(props) {
  const [number] = useState(props.number);
  const [content] = useState(props.content);
  console.log('detail:',content.detail);
  const detailArr = content.detail.map((item,idx) =>{
    return <li key={`content.titleName${idx}`}>{item}</li>
  })
  return (
    <div>
      <div style={{'display':'flex','flexDirection':'row','alignItems':'center'}}>
        <div style={style.numberCircle}>
          <span style={style.number}>{number}</span>
        </div>
        <div style={style.titleName}>{content.titleName+", "+content.date}</div>
      </div>
      <div style={style.detail}>
        <div style={{'marginLeft':'30px','paddingTop':'10px','paddingBottom':'10px'}}>{detailArr}</div>
      </div>
    </div>
  );
}
const style = {
  numberCircle:{
    'width':'30px',
    'height':'30px',
    'backgroundColor':'#A8A8A8',
    'color':'#FFF',
    'borderRadius':'50%',
    'display':'inline-block',
    'textAlign':'center',
    'lineHeight':'1',
  },
  number:{
    'display':'block',
    'color':'#FFF',
    'height':'30px',
    'lineHeight':'30px',
    'textAlign':'center'
  },
  titleName:{
    'fontSize':'16px',
    'color':'darkslategrey',
    'fontWeight':'bold',
    'marginLeft':'10px'
  },
  detail:{
    'borderLeft': '2px solid #A8A8A8',
    'height':'auto',
    'marginLeft':'13px'
  }
}
export default ExperienceList;