import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddAnnouncement from './AddAnnouncement'; // corrected import path

 test('AddAnnouncement component renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<AddAnnouncement />);
    const input = getByPlaceholderText('Enter announcement');
    const addButton = getByText('Add Announcement');

    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
});

test('AddAnnouncement component adds announcement on submit', () => {
    const { getByPlaceholderText, getByText } = render(<AddAnnouncement />);
    const input = getByPlaceholderText('Enter announcement');
    const addButton = getByText('Add Announcement');

    fireEvent.change(input, { target: { value: 'New announcement' } });
    fireEvent.click(addButton);

    expect(input.value).toBe('');
});
