import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Color from './components/Color';


// const draw = context =>{
//  context.fillText( Math.floor(Math.random() * 90 + 10),10,50)
// context.fillText("hi",200,100)
// context.textAlign = "center";
// context.font= "30px Arial"
  // context.fillStyle = "rgb(200, 200, 0)";
  // context.fillRect(10, 10, 50, 50);
// }
function App() {
  return (
    <div className="App">
     <Canvas  height={400} width={400}/>
    </div>
  );
}

export default App;
