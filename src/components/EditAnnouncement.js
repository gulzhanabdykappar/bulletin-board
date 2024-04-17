// src/components/EditAnnouncement.js
import React, { useState } from 'react';
import '../App.css';
const EditAnnouncement = ({ id, initialText, onCancel, onSave }) => {
    const [text, setText] = useState(initialText);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSave = () => {
        onSave(id, text); // Вызываем onSave с новым текстом
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default EditAnnouncement;
