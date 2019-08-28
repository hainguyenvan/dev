export default (state, action) => {
    console.log('sate: ', state)
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count === undefined ? 0 : state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count === undefined ? 0 : state.count - 1
            }
        default:
            return false;
    }
}