import { postDataTest } from '../src/client/js/postData'

test('Get the sum of 3 and 5 to get 8', () => {
  expect(postDataTest(3, 5)).toBe(8)
})