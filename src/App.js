import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';

const App = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const { data } = await axios.get('/api/news')
        setNews(data.news)
      } catch (err) {
        setNews(err.message)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let { data } = await axios.post('/api/news/create', {
        title: e.currentTarget.elements.title.value,
        content: e.currentTarget.elements.content.value
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(data.news)
      setNews(data.news)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(news)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Learn serverless <br />
          <small>using Begin</small>
        </h1>
      </header>
      <form className="App-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Begin API</legend>
          <input type="text" id="title" placeholder="Titulo" />
          <textarea id="content" placeholder="Texto" />
        </fieldset>
        <button type="submit">salvar</button>
      </form>
      <section>
        <h2>News</h2>
        <ul className="App-list">
          {news && news.map(({ title, content }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
