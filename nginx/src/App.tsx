import './App.css'
import {useState} from 'react'

function App() {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  async function HandleLogin() {
    if(email && password){
      alert(`Seu email é: ${email}\n Sus senha é: ${password}`)
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-t from-blue-600 to-black flex items-center justify-center'>
      <div className=' flex  bg-gradient-to-b from-blue-800 to-black min-w-[300px] min-h-[300px] items-center justify-center rounded-lg'>
         <form className='flex flex-col gap-3 items-center justify-center' action="">
          <input onChange={e=> setEmail(e.target.value)} className="w-[230px] h-11 rounded" type="text" placeholder='Email' />
          <input onChange={e=> setPassword(e.target.value)} className="w-[230px] h-11 rounded"type="text" placeholder='Senha'/>
          <button onClick={HandleLogin} className='w-[230px] h-11 rounded bg-gradient-to-l from-green-900 to-slate-400 text-white'>Entrar</button>
        </form> 
      </div>
    </div>
      
  )
}

export default App
