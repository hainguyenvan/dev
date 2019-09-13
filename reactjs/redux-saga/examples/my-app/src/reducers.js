const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                loading: true
            };
        case 'NEWS_RECEIVED':
            console.log('data ................');
            return {
                ...state,
                news: 'oke',
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;