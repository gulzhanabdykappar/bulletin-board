// src/store/reducers.js
const initialState = {
    announcements: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ANNOUNCEMENT':
            return {
                ...state,
                announcements: [...state.announcements, action.payload]
            };
        case 'DELETE_ANNOUNCEMENT':
            return {
                ...state,
                announcements: state.announcements.filter(announcement => announcement.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
