import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "../App";

test("The header and the image should be rendered", () => {
  const { getByText, getByAltText } = render(<App />);
  const header = getByText(/React Base App/);
  const image = getByAltText(/aurora borealis/i);

  expect(image).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});
