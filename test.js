const { createStore } = Redux;

const initialValue = { value: 5 };
function reducer(preState = initialValue, action) {
    /* if preState is undefined the preState assigned initial value othercase not assigned,preState value is occured */
    switch (action.type) {
        case "INCREMENT":
            return { ...preState, value: preState.value + 1 };
        case "DECREMENT":
            return { ...preState, value: preState.value - 1 };
        default:
            return preState
    }
}
const store = createStore(reducer);
const stateValue = store.getState();
console.log(stateValue);
store.subscribe(()=>{
    console.log(store.getState());
    document.getElementById("display").innerHTML=store.getState().value;
})
document.getElementById("display").innerHTML = stateValue.value;
document.getElementById("increment").onclick = () => {
    store.dispatch({
        type: "INCREMENT",
    });
};
document.getElementById("decrement").onclick = () => {
    store.dispatch({
        type: "DECREMENT",
    });
};
