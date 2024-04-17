// src/App.js
import React from 'react';
import AddAnnouncement from './components/AddAnnouncement';
import AnnouncementList from './components/AnnouncementList';

const App = () => {
    return (
        <div>
            <h1>Bulletin Board</h1>
            <AddAnnouncement />
            <AnnouncementList />
        </div>
    );
};

export default App;
