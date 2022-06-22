import {
  createRouter,
} from './router'

describe('createRouter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = undefined
    wrapper = createRouter()
  })
  test('is created', () => {
    expect(wrapper).toBeTruthy()
  })
  test('has history', () => {
    expect(wrapper.options.mode).toBe('history')
  })
  test('has home route', () => {
    const el = wrapper.options.routes.find((el) => el.path === '/')
    expect(el).toBeTruthy()
    expect(el.component.name).toBe('Home')
  })
})
