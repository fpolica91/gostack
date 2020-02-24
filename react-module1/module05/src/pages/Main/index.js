import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, SubmitButton, List } from './styles'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import api from '../../services/api'

const Main = () => {
  const [newRepos, setNewRepos] = useState(null)
  const [repositories, setRepositories] = useState('')
  const [loading, setLoading] = useState(0)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(1)
    console.log(newRepos)
    const response = await api.get(`/repos/${newRepos}`)
    const data = {
      name: response.data.full_name
    }
    setRepositories([...repositories, data])
    setNewRepos(null)
    setLoading(0)
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
          value={newRepos || ''}
          onChange={e => setNewRepos(e.target.value)}
        />
        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories &&
          repositories.map(repos => (
            <li>
              <span>{repos.name}</span>
              <Link to={`/repo/${encodeURIComponent(repos.name)}`}>
                Details
              </Link>
            </li>
          ))}
      </List>
    </Container>
  )
}

export default Main
