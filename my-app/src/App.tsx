import HelloWorld from "./HelloWorld";
import './index.css';

function App(){
  return(
    <div className="App">
      <HelloWorld /> {/* ②HelloWorldコンポーネントを画面上に配置する。 */}
    </div>
  )
}

export default App;