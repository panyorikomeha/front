import { useSelector, useDispatch } from "react-redux";

function RightSide() {
    const rightItems = useSelector((state) => state.rightItems);
    const rightSelected = useSelector((state) => state.rightSelected);
    const leftSelected = useSelector((state) => state.leftSelected);
    const dispatch = useDispatch();

    const selectItem = (index) => {
        if (rightSelected !== -1 || leftSelected !== -1) {
            resetCursor();
        }
        document.getElementById("right-" + index).style.backgroundColor = "aqua";
        dispatch({ type: "rightSelect", payload: index })
    };

    const onClick = () => {
        if(rightSelected !== -1){
            dispatch({ type: "moveLeft" })
            resetCursor();
        }
    };

    return (
        <div className='piece' id="rightSide">
            <div className='board'>
                {rightItems.map((item, index) => (
                    <div id={"right-" + index} key={index} className="item rightItem"
                        onClick={() => selectItem(index)}>
                        {item.name}
                    </div>
                ))}
            </div>
            <button className='moveButton' onClick={() => onClick()}>左へ移動</button>
        </div>
    );
}

function resetCursor() {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "transparent";
    }
}

export default RightSide;
