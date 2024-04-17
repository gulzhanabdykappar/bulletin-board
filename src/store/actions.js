// src/store/actions.js
export const addAnnouncement = (announcement) => ({
    type: 'ADD_ANNOUNCEMENT',
    payload: announcement
});

export const deleteAnnouncement = (id) => ({
    type: 'DELETE_ANNOUNCEMENT',
    payload: id
});
