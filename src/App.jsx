import { useState } from 'react'
import { URL } from './constant';
import Answers from './components/Answers';

function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(undefined)

  const payload = {
    "contents": [{
      "parts": [{ "text": question }]
    }]
  }

  const askQuestion = async () => {
    // console.log(question);
    let reponse = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload)
    })

    reponse = await reponse.json();
    let dataString = reponse.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ");
    dataString = dataString.map((item) => item.trim())

    console.log(dataString);
    setResult(dataString);
  }

  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>
        hello
      </div>
      <div className='col-span-4 p-10'>
        <div className='container h-110 overflow-scroll'>
          <div className='text-zinc-300'>
            <ul>
              {/* {result} */}
              {
                result && result.map((item, index) => (
                  <li key={index} className='text-left p-1'><Answers ans={item} key={index} /></li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl border border-zinc-400 flex h-16'>
          <input type="text" value={question} onChange={(event) => setQuestion(event.target.value)} className="w-full h-full p3 outline-none" placeholder='ask me anything' />
          <button type="button" onClick={askQuestion}>Ask</button>
        </div>
      </div>
    </div>
  )
}

export default App
