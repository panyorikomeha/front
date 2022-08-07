import { useSelector, useDispatch } from "react-redux";

function RightSide() {
    const rightItems = useSelector((state) => state.rightItems);
    const rightSelected = useSelector((state) => state.rightSelected);
    const dispatch = useDispatch();

    const selectItem = (index) => {
        if(rightSelected !== -1){
            document.getElementById("right-" + index).style.backgroundColor = "white";
        }
        document.getElementById("right-" + index).style.backgroundColor = "aqua";
        dispatch({ type: "rightSelect", payload: index })
    };

    const onClick = () => {
        dispatch({ type: "moveLeft" })
    };

    return (
        <div className='piece' id="rightSide">
            <div className='board'>
                {rightItems.map((item, index) => (
                    <div id={"right-" + index} key={index} className="item" 
                        onClick={() => selectItem(index)}>
                        {item.name}
                    </div>
                ))}
            </div>
            <button className='moveButton' onClick={() => onClick()}>左へ移動</button>
        </div>
    );
}

export default RightSide;
