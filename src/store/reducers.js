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
        case 'EDIT_ANNOUNCEMENT':
            return {
                ...state,
                announcements: state.announcements.map(announcement =>
                    announcement.id === action.payload.id ? { ...announcement, text: action.payload.text } : announcement
                )
            };
        default:
            return state;
    }
};

export default reducer;
