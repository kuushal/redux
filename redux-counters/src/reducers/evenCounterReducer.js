const evenCounterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCR2":
            return state + 2;
        case "DECR2":
            return state - 2;
        default:
            return state;
    }
}

export default evenCounterReducer;