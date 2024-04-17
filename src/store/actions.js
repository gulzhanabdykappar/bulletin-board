export const addAnnouncement = (announcement) => ({
    type: 'ADD_ANNOUNCEMENT',
    payload: announcement
});

export const deleteAnnouncement = (id) => ({
    type: 'DELETE_ANNOUNCEMENT',
    payload: id
});

export const editAnnouncement = (announcement) => ({
    type: 'EDIT_ANNOUNCEMENT',
    payload: announcement
});
