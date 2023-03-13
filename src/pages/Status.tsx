import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status() {
  const [ newAnswer, setNewAnswer] = useState('')
  const [ anwers, setAnswers ] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso',
])

  function createNewTAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers(state =>[newAnswer,...state])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers(state =>[newAnswer,...state])
      setNewAnswer('')
    }

  }

    return(
        <main className="status">
        <Header title="Tweet"/>
          
        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in omnis officia. Delectus quidem vitae doloremque optio nihil autem alias, quod eos aspernatur? Perspiciatis excepturi similique nostrum, saepe eveniet fugit?"/>

        <Separator />

        <form onSubmit={createNewTAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
            <textarea
              id="tweet"
              placeholder="Tweet your answer"
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={event => setNewAnswer(event.target.value)}
            />
          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>

        {anwers.map(answer=>{
          return(
            <Tweet key={answer} content={answer}/>
          )
        })}
        </main>
    )
}