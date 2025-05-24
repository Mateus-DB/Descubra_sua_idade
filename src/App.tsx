import { useState, FormEvent, useRef } from 'react'

import './App.css'

function App() {

  interface idadeAtualProps {
    nome: string,
    ano: number
  }

  const [inputNome, setInputNome] = useState('');
  const [inputAno, setinputAno] = useState('');
  const [idadeAtual, setIdadeAtual] = useState<idadeAtualProps>()
  const inputRef = useRef<HTMLInputElement>(null)

  function descobrirIdade(e: FormEvent) {
    e.preventDefault()

    if (inputNome === '' || inputAno === '') {
      alert('Preencha todos os campos!')
      return
    }

    const anoAtual = new Date().getFullYear();

    setIdadeAtual({
      nome: inputNome,
      ano: anoAtual - Number(inputAno)
    })

    setInputNome('');
    setinputAno('');

    inputRef.current?.focus()

    handleKeypress

  }

  function handleKeypress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      return
      descobrirIdade(e);
    }


  }


  return (
    <div className='container'>

      <h1>Descubra sua idade</h1>

      <form onSubmit={descobrirIdade}>
        <label htmlFor="nome">Digite seu nome?</label>
        <input ref={inputRef} type="text" id='nome' placeholder='Digite seu nome' value={inputNome.toLocaleLowerCase()} onChange={(e) => setInputNome(e.target.value)} />

        <label htmlFor="ano">Digite o ano que nasceu?</label>
        <input type="text" id='ano' placeholder='Digite o ano de nascimento' value={inputAno} onChange={(e) => setinputAno(e.target.value)} />

        <button type='submit' className='descobrir'>Descobrir idade</button>
      </form>

      {idadeAtual && idadeAtual.nome !== '' && (
        <h2>{idadeAtual.nome} você tem: {idadeAtual.ano} anos</h2>
      )}

    </div>
  )
}

export default App
