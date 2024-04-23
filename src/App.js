// import React from 'react';
// import AddAnnouncement from './components/AddAnnouncement';
// import AnnouncementList from './components/AnnouncementList';
//
// const App = () => {
//     return (
//         <div>
//             <h1>Bulletin Board</h1>
//             <AddAnnouncement />
//             <AnnouncementList />
//         </div>
//     );
// };
//
// export default App;
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Импортируем Redux store
import AddAnnouncement from './components/AddAnnouncement';
import AnnouncementList from './components/AnnouncementList';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Bulletin Board</h1>
                <AddAnnouncement />
                <AnnouncementList />
            </div>
        </Provider>
    );
};

export default App;
