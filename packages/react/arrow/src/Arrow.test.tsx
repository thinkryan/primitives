import { axe } from 'jest-axe';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Arrow } from '@radix-ui/react-arrow';

const WIDTH = 40;
const HEIGHT = 30;

describe('given a default Arrow', () => {
  let rendered: RenderResult;
  let svg: HTMLElement;

  beforeEach(() => {
    rendered = render(<Arrow width={WIDTH} height={HEIGHT} data-testid="test-arrow" />);
    svg = rendered.getByTestId('test-arrow');
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have width attribute', () => {
    expect(svg).toHaveAttribute('width', String(WIDTH));
  });

  it('should have height attribute', () => {
    expect(svg).toHaveAttribute('height', String(HEIGHT));
  });
});
