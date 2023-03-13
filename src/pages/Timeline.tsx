import { Tweet } from '../components/Tweet'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'

import './Timeline.css'
import { FormEvent, KeyboardEvent, useState } from 'react'



export function Timeline() {
  const [ newTweet, setNewTweet] = useState('')
  const [ tweets, setTweets ] = useState([
    'Meu Primiro Tweet',
    'Teste',
    'Deu certo Tweetar',
])

  function createNewTweet(event: FormEvent){
    event.preventDefault()
    setTweets(state =>[newTweet,...state])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets(state =>[newTweet,...state])
      setNewTweet('')
    }
  }

    return(
        <main className="timeline">
        <Header title="Home"/>

        
        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
            <textarea
              id="tweet"
              placeholder="What's hapenning?"
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event => setNewTweet(event.target.value))}
            />
          </label>

          <button type="submit">Tweet</button>
        </form>
        <Separator />

        {tweets.map(tweet=>{
          return(
            <Tweet key={tweet} content={tweet}/>
          )
        })}
        </main>
    )
}