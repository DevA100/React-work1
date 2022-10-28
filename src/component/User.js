import htmlimages from "../Imgs/html.png";
import cssimages from "../Imgs/css.png";
import jsimages from "../Imgs/js.png";
import reactimages from "../Imgs/react.png";

const style = {
    height: "",
  };
const User = () => (
    <div
      style={{ backgroundColor: "#dcdcdc", width: "1099px", marginLeft: "50px" }}
    >
      <h4 style={{ textAlign: "center" }}>Front End Technologies</h4>
      <img src={htmlimages} style={style} alt="cssimage" />
      <img src={cssimages} style={style} alt="cssimage" />
      <img src={jsimages} style={style} alt="cssimage" />
      <img src={reactimages} style={style} alt="cssimage" />
    </div>
  );
 export default User; 