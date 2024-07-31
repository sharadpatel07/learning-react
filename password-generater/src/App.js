import { useState , useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length , setlength] = useState(8);
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");
  const passwordRef = useRef();
  const   passwordGenerater = useCallback(() => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz';
      if (numberAllowed) {
        str += "0123456789"
      }  

      if (charAllowed) {
        str += "!@#$%^&*-_=+{}[]\|?~`"
      }

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)
    },
    [length , numberAllowed , charAllowed , setPassword],
  )
  
  const copyPassword = useCallback(()=> {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerater();
  },[length , numberAllowed , charAllowed , passwordGenerater])
  
  return (
    <>
      <div className="container">
              <label htmlFor="Password">Password Generator</label>
            <div>
              <input type="text" value={password} className="input" placeholder="pasasword" readOnly/>
              <button onClick={copyPassword}>copy</button>
            </div>
            <div className="changer">
              <div>
                  <input type="range" min={6} max={50} value={length} className="range" onChange={(e)=>setlength(e.target.value)}/>
                  <label>Length: {length}</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=> {setnumberAllowed((prev) => !prev)}}/>
                <label>Numbers</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=> {setCharAllowed((prev) => !prev)}}/>
                <label>Characters</label>
              </div>
            </div>
           
      </div>
    </>
  );
}

export default App;
