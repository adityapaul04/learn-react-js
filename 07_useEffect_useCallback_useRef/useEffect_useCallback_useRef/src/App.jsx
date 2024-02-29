import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str = str + "0123456789"
    }

    if (character) {
      str = str + "@!#$%^&*(){}"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword])

  const copyPassword = useCallback( () => {
    passwordReference.current?.select();
    window.navigator.clipboard.writeText(password);

  } , [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator])

  return (
    <>
      <div className="password-container w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 px-5 py-2">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text" className='outline-none w-full py-1 px-3' placeholder='password' readOnly value={password} ref={passwordReference} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2"></div>
        <div className="flex gap-5 items-center gap-x-1 text-white justify-around">
          <input min={1} max={100} type="range" name="length" id="length" value={length} onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="length">Length: {length}</label>

          <input type="checkbox" defaultChecked={number} name="number" id="number" onChange={() => setNumber((prev) => !prev)} />
          <label htmlFor="number">Numbers</label>
          <input type="checkbox" defaultChecked={character} name="character" id="character" onChange={() => setCharacter((prev) => !prev)} />
          <label htmlFor="character">Character</label>

        </div>
      </div>
    </>
  )
}

export default App
