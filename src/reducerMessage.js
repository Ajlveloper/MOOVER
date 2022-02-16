export const reducerMessage = (state = [], action) => {

    switch (action) {
        case 'POST_MESSAGE':
            return [ ...state, action.payload ];
    
        default:
            return
    }


}