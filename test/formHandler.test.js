import { formHandlerTest } from '../src/client/js/formHandler'

test('Multiply 3 and 5 to get 15', () => {
  expect(formHandlerTest(3, 5)).toBe(15)
})