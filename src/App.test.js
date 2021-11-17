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
test('initial conditions', async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();
  const checkbox = await screen.findByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
test('test enable and disable', async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole('button', { name: /change to blue/i });
  const checkbox = await screen.findByRole('checkbox', { name: 'Disable button'});
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).not.toBeDisabled();
  

});

