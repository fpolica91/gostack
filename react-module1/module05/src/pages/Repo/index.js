/* eslint-disable react/no-typos */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import PropTypes from 'prop-types'
import { Loading, Owner, IsusueList } from './styles'
import Container from '../../Container/index'

const Repo = ({ match }) => {
  const [repository, setRepositories] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(1)

  useEffect(() => {
    async function loadRepos() {
      const repoName = decodeURIComponent(match.params.repository)
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ])
      setRepositories(repository.data)
      setIssues(issues.data)
      setLoading(0)
    }
    loadRepos()
  }, [])

  if (loading) {
    return <Loading>Loading...</Loading>
  }

  return (
    <Container>
      <Owner>
        <Link to="/">Go Back</Link>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IsusueList>
        {issues.map(issue => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}> {issue.title} </a>
                {issue.labels.map(label => (
                  <span key={label.id}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IsusueList>
    </Container>
  )

  // return <h1>Repository : {decodeURIComponent(match.params.repository)}</h1>
}

Repo.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string
    })
  }).isRequired
}

export default Repo
