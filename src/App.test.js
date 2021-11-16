import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', async  () => {
  render(<App></App>);
  const colorButton =  await screen.findByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});
test('button turns blue when clicked', async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole('button', { name: /change to blue/i });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toMatch(/change to red/i);
});
test('button has correct initial text', () => {
  
});

