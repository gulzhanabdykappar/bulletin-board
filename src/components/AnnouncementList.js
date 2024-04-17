import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAnnouncement, editAnnouncement } from '../store/actions';
import EditAnnouncement from './EditAnnouncement';
import '../App.css';
const AnnouncementList = () => {
    const announcements = useSelector(state => state.announcements);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);

    const handleDelete = (id) => {
        dispatch(deleteAnnouncement(id));
    };

    const handleEdit = (id) => {
        setEditId(id);
    };

    const handleCancelEdit = () => {
        setEditId(null);
    };

    const handleSaveEdit = (id, newText) => {
        dispatch(editAnnouncement({ id, text: newText }));
        setEditId(null);
    };

    return (
        <div>
            <h2>Announcements</h2>
            <ul>
                {announcements.map(announcement => (
                    <li key={announcement.id}>
                        {editId === announcement.id ? (
                            <EditAnnouncement
                                id={announcement.id}
                                text={announcement.text}
                                onCancel={handleCancelEdit}
                                onSave={handleSaveEdit}
                            />
                        ) : (
                            <>
                                {announcement.text}
                                <button onClick={() => handleEdit(announcement.id)}>Edit</button>
                                <button onClick={() => handleDelete(announcement.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnnouncementList;
