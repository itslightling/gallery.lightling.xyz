import { createRouter } from './router'

describe('createRouter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = undefined;
    wrapper = createRouter();
  })
  test('is created', () => {
    expect(wrapper).toBeTruthy();
  });
  test('has history', () => {
    expect(wrapper.options.mode).toBe('history');
  });
  test('has home route', () => {
    const el = wrapper.options.routes.find(el => el.path === '/');
    expect(el).toBeTruthy();
    expect(el.component.name).toBe('Home');
  });
  test('has digital route', () => {
    const el = wrapper.options.routes.find(el => el.path === '/gallery/digital');
    expect(el).toBeTruthy();
    expect(el.component.name).toBe('Gallery');
  });
  test('has anthro route', () => {
    const el = wrapper.options.routes.find(el => el.path === '/gallery/anthro');
    expect(el).toBeTruthy();
    expect(el.component.name).toBe('Gallery');
  });
  test('has photo route', () => {
    const el = wrapper.options.routes.find(el => el.path === '/gallery/photo');
    expect(el).toBeTruthy();
    expect(el.component.name).toBe('Gallery');
  });
  test('has traditional route', () => {
    const el = wrapper.options.routes.find(el => el.path === '/gallery/traditional');
    expect(el).toBeTruthy();
    expect(el.component.name).toBe('Gallery');
  });
})
