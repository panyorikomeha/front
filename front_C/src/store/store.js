import { createStore } from "redux"

const initialState = {
    leftItems: [
        { name: 'Apple' },
        { name: 'Grape' },
        { name: 'Strawberry' },
        { name: 'Cherry' },
        { name: 'Plum' }
    ],
    leftSelected: -1,

    rightItems: [
        { name: 'Watermelon' },
        { name: 'Banana' },
        { name: 'Peach' }
    ],
    rightSelected: -1,
};

const reducer = (state = initialState, action) => {
    let index = action.payload;
    let moveItem
    switch (action.type) {
        case "leftSelect":
            return {
                leftSelected: index,
                rightSelected: -1,
                leftItems: state.leftItems,
                rightItems: state.rightItems
            }
        case "rightSelect":
            return {
                rightSelected: index,
                leftSelected: -1,
                leftItems: state.leftItems,
                rightItems: state.rightItems
            }
        case "moveRight":
            let lSelected = state.leftSelected;
            moveItem = state.leftItems[lSelected];
            if (lSelected !== -1) {
                return {
                    leftItems: [...state.leftItems.slice(0, lSelected), ...state.leftItems.slice(lSelected + 1)],
                    rightItems: [...state.rightItems, moveItem],
                    leftSelected: -1,
                    rightSelected: -1
                };
            }
        case "moveLeft":
            let rSelected = state.rightSelected;
            moveItem = state.rightItems[rSelected];
            if (rSelected !== -1) {
                return {
                    leftItems: [...state.leftItems, moveItem],
                    rightItems: [...state.rightItems.slice(0, rSelected), ...state.rightItems.slice(rSelected + 1)],
                    leftSelected: -1,
                    rightSelected: -1
                };
            }
        default:
            return state
    }
};

const store = createStore(reducer);

export default store;

