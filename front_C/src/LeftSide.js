import { useSelector, useDispatch } from "react-redux"

function LeftSide() {
  const leftItems = useSelector((state) => state.leftItems);
  const leftSelected = useSelector((state) => state.leftSelected);
  const rightSelected = useSelector((state) => state.rightSelected);
  const dispatch = useDispatch();

  const selectItem = (index) => {
    if (leftSelected !== -1 || rightSelected !== -1) {
      resetCursor();
    }
    document.getElementById("left-" + index).style.backgroundColor = "aqua";
    dispatch({ type: "leftSelect", payload: index });
  };

  const onClick = () => {
    if (leftSelected !== -1) {
      dispatch({ type: "moveRight" });
      resetCursor();
    }
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

function resetCursor() {
  let items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "transparent";
  }
}

export default LeftSide;
