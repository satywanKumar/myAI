import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [question,setQuestion] = useState('');
  const [response,setResponse] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(question)
    axios.post('https://gemini-app-two.vercel.app/getResponse',{
      question:question
    })
    .then(res=>{
      console.log(res.data.response);
      setResponse(res.data.response);
      setQuestion('');
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const speakHandler = ()=>{
    const a = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(a);
  }

  return (
    <div className="App">
      <div className='box'>
        <div className='profile-pic'>
          <img className='pic' alt='profile pic' src={require('../src/assets/satya.png')}/>
        </div>
        <p className='label'>SBS Online Classes</p>
       <textarea onChange={(e)=>{setQuestion(e.target.value)}}/>
       <button onClick={submitHandler}>Send</button>
      </div>
      <div className='box'>
      <div className='profile-pic'>
          <img className='pic' alt='profile pic' src={require('../src/assets/gemini AI.png')}/>
        </div>
        <p className='label'>Gemini</p>
       <textarea value={response}/>
       <button onClick={speakHandler}>Speak</button>
      </div>
    </div>
  );
}

export default App;
