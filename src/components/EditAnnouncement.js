// src/components/AddAnnouncement.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnnouncement } from '../store/actions';

const AddAnnouncement = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAnnouncement({ id: Date.now(), text }));
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
            <button type="submit">Add Announcement</button>
        </form>
    );
};

export default AddAnnouncement;
