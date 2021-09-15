import textToMorse from "./translator.js"

describe('running basic tests', () => {
  let inputStr
  let output
  test("should return ....", () => {
    inputStr = textToMorse("iii")
    output = ".. .. .."
    expect(inputStr).toBe(output)
  })
  test("should return ....", () => {
    inputStr = textToMorse("hello")
    output = ".... . .-.. .-.. ---"
    expect(inputStr).toBe(output)
  })
})