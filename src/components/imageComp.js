import React from "react";

const ImageComp=()=>{
    const myImgStyle = {width:'100%',height:'500px',marginTop:'5px',marginBottom:'20px'};
return (
    <img style={myImgStyle}  src={require('/Users/itsageek/gofra/src/images/imageNgo.jpg')}></img>
    );
};
export default ImageComp