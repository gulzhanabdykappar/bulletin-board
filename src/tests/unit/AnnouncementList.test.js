import React from 'react';
import { render } from '@testing-library/react';
import AnnouncementList from './AnnouncementList';

test('AnnouncementList component renders correctly', () => {
    const announcements = [
        { id: 1, text: 'Announcement 1' },
        { id: 2, text: 'Announcement 2' },
    ];


    const { getByText } = render(<AnnouncementList announcements={announcements} />);
    announcements.forEach((announcement) => {
        const announcementText = getByText(announcement.text);
        expect(announcementText).toBeInTheDocument();
    });
});
