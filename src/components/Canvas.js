import React, { useState } from "react";
import ProTypes from "prop-types";
import Select from "react-select";

const Canvas =({height,width})=>{
    const [color,setColor] = useState("white")
    const [option,setOption] = useState(["red","pink","yellow"])
    // const defaultOption = options[0];
    // const hi = "hi"
    console.log(color,"top") 
    var clr = color
    function convertToRGB(){
        // if(clr.length != 6){
        //     throw "Only six-digit hex colors are allowed.";
        // }
    
        // var rgb =clr
      
           let r = parseInt(clr.slice(1,3), 16);
           let g =parseInt(clr.slice(3,5), 16);
           let b = parseInt(clr.slice(5,7), 16);
        
           let rr= r+5;
           let gg = g+3;
           let bb = b+3;
           console.log(rr,gg,bb)
        return {r,g,b};

       
    }
    
    console.log(convertToRGB());
    function handleChange(event) {
        event.preventDefault();
      }
    
    const canvas =React.useRef();
    React.useEffect(()=>{
        const context = canvas.current.getContext("2d");
        // draw(context);  
        // console.log(color,"btm")   
context.fillText(Math.floor(Math.random() * 90 + 10),50,50);
context.font = "30px Arial";
context.fillStyle = "black";

    })
    return(
        <div>
             <canvas className="canva"
              style={{backgroundColor:color}}
              ref={canvas}
              width={width}
              height={height}/>

            <div id="buttons">
              <span>Color :</span>
              <input type="color" value={color} onChange={e=>setColor(e.target.value)}/>
            </div> 
            <div>
            <select value={option} onChange={handleChange}>
                  <option>Background</option>
                  <option value={option[0]}>{option[0]}</option>
                  <option value={option[1]}>{option[1]}</option>
                  <option value={option[2]}>{option[2]}</option>
            </select>
            </div>

        </div>
       
        
    )
}
Canvas.prototype={
    // draw:ProTypes.func.isRequired,
    height:ProTypes.number.isRequired,
    width:ProTypes.number.isRequired,
}

export default Canvas;