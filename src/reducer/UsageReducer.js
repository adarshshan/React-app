
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return {
                ...state,
                value: state.value + 1
            }
        case 'decrement':
            return {
                ...state,
                value: state.value - 1
            }

        case 'blue':
            return {
                ...state,
                value: state.color = 'blue'
            }
        case 'red':
            return {
                ...state,
                value: state.color = 'red'
            }
        default:
            return {
                state
            }
    }
    if (action === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    } else {
        return {
            ...state,
            value: state.value - 1
        }
    }
}

export default reducer
