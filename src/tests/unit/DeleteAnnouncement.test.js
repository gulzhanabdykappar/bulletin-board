import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteAnnouncement from './DeleteAnnouncement';

test('DeleteAnnouncement component renders correctly', () => {

    const announcementId = 1;
    const onDelete = jest.fn();

    // Render DeleteAnnouncement with mock props
    const { getByText } = render(<DeleteAnnouncement announcementId={announcementId} onDelete={onDelete} />);

    // Assert that delete button is rendered
    const deleteButton = getByText('Delete');
    expect(deleteButton).toBeInTheDocument();
});

test('DeleteAnnouncement component calls onDelete when delete button is clicked', () => {

    const announcementId = 1;
    const onDelete = jest.fn();
    const { getByText } = render(<DeleteAnnouncement announcementId={announcementId} onDelete={onDelete} />);
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);


    expect(onDelete).toHaveBeenCalledWith(announcementId);
});
