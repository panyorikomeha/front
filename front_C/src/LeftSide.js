import { useSelector, useDispatch } from "react-redux"

function LeftSide() {
  const leftItems = useSelector((state) => state.leftItems)
  const dispatch = useDispatch();

  const selectItem = (index) => {
    let selected = document.getElementById("left-" + index);
    selected.style.backgroundColor = "aqua";
    dispatch({type: "leftSelect", payload: index});
  };

  const onClick = () => {
    dispatch({ type: "moveRight" })
  };

  return (
    <div className="piece" id="leftSide">
      <div className='board'>
        {leftItems.map((item, index) => (
          <div id={"left-" + index} key={index} className="item"
            onClick={() => selectItem(index)}>
            {item.name}
          </div>
        ))}
      </div>
      <button className='moveButton' onClick={() => onClick()}>右へ移動</button>
    </div>
  );
}

export default LeftSide;
