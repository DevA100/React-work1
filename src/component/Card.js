import profile from "../Imgs/profile.jpeg";
import check from "../Imgs/check.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/fontawesome-svg-core';

 const Card =()=>(

    <div
    style={{
      backgroundColor: "#dcdcdc",
      width: "1099px",
      marginLeft: "50px",
      marginTop:'30px',
      display:'grid',
      height:500
    }}>
      <div
     style={{backgroundColor:"#ffffff", marginRight:10, marginLeft:10,marginTop:5,marginBottom:5,}} 
      >
      <img src={profile} style={{width: 150,height:150,border:"none", borderRadius:80, marginLeft:15,marginTop:15,}}></img>
      <div style={{marginLeft:15, marginTop:20}}>
      <h3 style={{display: "inline-flex", justifyContent:"center"}}>JACOB CHIDIMMA ANGEL
        <img src= {check} style ={{width:22,}} />
      </h3>
      <h4 style={{color:"#afbab9"}}>React Developer, Nigeria</h4>
      <h3>SKILLS</h3>
      {/* <div style={{  display:"flex", rowGap:10, columnGap:10, flexWrap: "wrap",  }} className="flex-container">
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Css</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Bootstrap</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >React</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Redux</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Node</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Html</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >MySQL</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Git</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Express</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Sass</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >JavaScript</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Next</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Python</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Flutter</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Oracle</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >FLask</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Rubby</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Golan</button>
        <button style={{backgroundColor:"#6cc3c1",border:"none", borderRadius: 5,padding:10,}} >Flutter</button>
      </div> */}
      <div className="flex-container">
        <div>
          <FontAwesomeIcon icon={icon('coffee')} />
        </div>
        <div  >Css</div>
        <div  >Bootstrap</div>
        <div  >React</div>
        <div  >Redux</div>
        <div  >Node</div>
        <div  >Html</div>
        <div  >MySQL</div>
        <div  >Git</div>
        <div  >Express</div>
        <div  >Sass</div>
        <div  >JavaScript</div>
        <div  >Next</div>
        <div  >Python</div>
        <div  >Flutter</div>
        <div  >Oracle</div>
        <div  >FLask</div>
        <div  >Rubby</div>
        <div  >Golan</div>
        <div  >Flutter</div>
      </div>
      <h4  style={{color:"#afbab9"}}>🕔 Joined on Aug 30, 2022</h4>
      </div>
      </div>
    
    </div>
    
    
    );
    export default Card;
    