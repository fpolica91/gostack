import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, SubmitButton, List, NotFound } from './styles'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import api from '../../services/api'

const Main = () => {
  const [newRepos, setNewRepos] = useState(null)
  const [repositories, setRepositories] = useState('')
  const [loading, setLoading] = useState(0)
  const [notFound, setNoFound] = useState(0)
  const [maxReq, setMaxReq] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(false)
    setMaxReq(0)
    try {
      const response = await api.get(`/repos/${newRepos}`)
      const data = {
        name: response.data.full_name
      }
      setRepositories([...repositories, data])
      setNewRepos(null)
      setLoading(0)
      setNoFound(0)
    } catch (err) {
      setLoading(0)
      setNoFound(1)
      setMaxReq(true)
    }
  }
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repos
      </h1>
      <Form onSubmit={handleSubmit} notFound={notFound}>
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
      <div>{maxReq && <p>Max Requests Reached</p>}</div>
    </Container>
  )
}

export default Main
