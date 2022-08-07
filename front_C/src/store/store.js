import {createStore} from "redux"

const initialState ={
    leftItems:[
        { name:'Apple'},
        { name:'Grape'},
        { name:'Strawberry'},
        { name:'Cherry'},
        { name:'Plum'}
    ],
    rightItems:[
        { name:'Watermelon'},
        { name:'Banana'},
        { name:'Peach'}
    ]
};

const reducer = (state = initialState) => {
    return state
};

const store = createStore(reducer);

export default store;

