import React, { useState, useEffect } from 'react'

import { Container, Form, SubmitButton } from './styles'

import { FaGithubAlt, FaPlus } from 'react-icons/fa'
const Main = () => {
  const [newRepos, setNewRepos] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(newRepos)
  }
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repos
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add repo"
          onChange={e => setNewRepos(e.target.value)}
        />
        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default Main
