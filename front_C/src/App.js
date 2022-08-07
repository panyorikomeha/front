import './App.css';
import {useSelector} from "react-redux"

function App() {
  const leftItems = useSelector((state) => state.leftItems)
  const rightItems = useSelector((state) => state.rightItems)
  return (
    <div className='content'>
      <div className="piece" id="leftSide">
        <div className='board'>
          {leftItems.map((item, index) => (
            <div key={index} className="item">{item.name}</div>
          ))}
        </div>
        <button className='moveButton'>右へ移動</button>
      </div>
      <div className='piece' id="rightSide">
        <div className='board'>
        {rightItems.map((item, index) => (
            <div key={index} className="item">{item.name}</div>
          ))}
        </div>
        <button className='moveButton'>左へ移動</button>
      </div>
    </div>
  );
}

export default App;
