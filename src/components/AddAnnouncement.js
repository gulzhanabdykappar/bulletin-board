// src/components/AddAnnouncement.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnnouncement, editAnnouncement } from '../store/actions';
import '../App.css';

const AddAnnouncement = () => {
    const [text, setText] = useState('');
    const announcements = useSelector(state => state.announcements);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingAnnouncement = announcements.find(announcement => announcement.text === text);
        if (existingAnnouncement) {
            dispatch(editAnnouncement({ id: existingAnnouncement.id, text }));
        } else {
            dispatch(addAnnouncement({ id: Date.now(), text }));
        }
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter announcement"
            />
            <button type="submit">Add/Edit Announcement</button>
        </form>
    );
};

export default AddAnnouncement;
