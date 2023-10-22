import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // Assuming you are using Redux
import configureStore from 'redux-mock-store'; 
import AddActivityForm from './AddActivityForm';


const mockStore = configureStore([]);
const store = mockStore({}); 

describe('AddActivityForm component', () => {
  it('should render correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <AddActivityForm />
      </Provider>
    );

    const activityNameInput = getByLabelText('Activity Name');
    const activityNotesInput = getByLabelText('Activity Notes');
    const submitButton = getByText('Submit');

    expect(activityNameInput).toBeInTheDocument();
    expect(activityNotesInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should handle input changes', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <AddActivityForm />
      </Provider>
    );

    const activityNameInput = getByLabelText('Activity Name');
    const activityNotesInput = getByLabelText('Activity Notes');

    fireEvent.change(activityNameInput, { target: { value: 'Test Activity' } });
    fireEvent.change(activityNotesInput, { target: { value: 'Test Notes' } });

    expect(activityNameInput.value).toBe('Test Activity');
    expect(activityNotesInput.value).toBe('Test Notes');
  });

  it('should submit the form with valid input', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <AddActivityForm />
      </Provider>
    );

    const activityNameInput = getByLabelText('Activity Name');
    const activityNotesInput = getByLabelText('Activity Notes');
    const submitButton = getByText('Submit');

    fireEvent.change(activityNameInput, { target: { value: 'Test Activity' } });
    fireEvent.change(activityNotesInput, { target: { value: 'Test Notes' } });

    fireEvent.click(submitButton);

  });
});

