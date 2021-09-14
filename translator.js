const textToMorse = (inputStr) => {
  const morseCode = {
    A : ".-", 
    B : "-...",
    C : "-.-.", 
    D : "-..",
    E : ".", 
    F : "..-.", 
    G : "--.", 
    H : "....",
    I : "..", 
    J : ".---", 
    K : "-.-", 
    L : ".-..",
    M : "--", 
    N : "-.", 
    O : "---", 
    P : ".--.",
    Q : "--.-", 
    R : ".-.", 
    S : "...", 
    T : "-",
    U : "..-", 
    V : "...-", 
    W : ".--", 
    X : "-..-",
    Y : "-.--", 
    Z : "--..",
  }
  const arr1 = inputStr.split("")
  const arr2 = arr1.map(elem => {
    const ele = elem.toUpperCase()
      if (morseCode[ele]) {
        return morseCode[ele]
      } else {
        return '  '
      }
  })
  return arr2.join("")
}

export default textToMorse



				

