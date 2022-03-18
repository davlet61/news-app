import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';

const mockFn = jest.fn();
const news = {
  status: 'ok',
  totalResults: 0,
  articles: [],
};

describe('SearchForm', () => {
  test('should render input element', () => {
    render(<SearchForm addNews={mockFn} />);
    const inputElement = screen.getByPlaceholderText(/search.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('should be able to type into input', () => {
    render(<SearchForm addNews={mockFn} />);
    const inputElement = screen.getByPlaceholderText(
      /search.../i,
    ) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: 'Learn using typescript' },
    });
    expect(inputElement.value).toBe('Learn using typescript');
  });

  test('should be able to click on a button', () => {
    render(<SearchForm addNews={mockFn} />);
    const inputElement = screen.getByPlaceholderText(
      /search.../i,
    ) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: 'Learn using typescript' },
    });
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(mockFn).toBeCalled();
  });

  test('should have empty input when add button is cliked', () => {
    render(<SearchForm addNews={mockFn} />);
    const inputElement = screen.getByPlaceholderText(
      /search.../i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'Learn using typescript with react' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });

  test('should not be able to add a task without a title', () => {
    render(<SearchForm addNews={mockFn} />);
    const inputElement = screen.getByPlaceholderText(
      /short description of the task/i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'Description of some task' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });

  test('should add a task with a title and a description', () => {
    render(<SearchForm addNews={mockFn} />);
    const titileInput = screen.getByPlaceholderText(
      /search.../i,
    ) as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(
      /short description of the task/i,
    ) as HTMLInputElement;
    fireEvent.change(titileInput, {
      target: { value: 'Some important task' },
    });
    fireEvent.change(descriptionInput, {
      target: { value: 'Description of some task' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(titileInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });
});
