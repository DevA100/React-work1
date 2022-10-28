const Form = () => (
  <div
    style={{
      backgroundColor: "#dcdcdc",
      width: "1099px",
      marginLeft: "50px",
      marginTop:'30px',
      display:'grid'
    }}
  >
    <div
      style={{
        backgroundColor: "#bbe6ff",
        width: "90%",
        margin:'20px',
        borderRadius: "5px",
        justifySelf:'center',
      }}
    >
      <h2 style={{padding:10, textAlign: "center" }}>SUBSCRIBE</h2>
      <p style={{padding:10, textAlign: "center"}}>sign up with your email address to receive news and updates</p>
      <form style={{display: "flex", flexDirection: "column", alignItems:'center', gap: 40}}>
        <div style={{display:'flex', flexDirection:'row', gap: 10, }} >
        <div>
          <input style={{border:'none',borderRadius:10, paddingLeft: 10, paddingTop:10, paddingBottom:10, color: "#dcdcd3", textAlign :"justify"}}type="text" value="firstname" />
        </div>
        <div>
          <input style={{border:'none',borderRadius:10,paddingLeft: 10,  paddingTop:10, paddingBottom:10, color: "#dcdcd3", textAlign :"justify" }}type="text" value="lastname" />
        </div>
        <div>
          <input style={{border:'none',borderRadius:10, paddingLeft: 10,  paddingTop:10, paddingBottom:10, color: "#dcdcd3", textAlign :"justify"}}type="text" value="email" />
        </div>
        </div>
        
        <div>
          <input style ={{marginBottom: 70, paddingTop:10, paddingRight:150, backgroundColor: "#ff676b", borderRadius:10, border:'none', textAlign: "center", color: "white", paddingLeft: 150, paddingBottom:10, }} type="submit" value="submit" />
        </div>
      </form>
    </div>
  </div>
);
export default Form;