import React, { useState, useEffect } from 'react'
import api from '~/services/api'
import { Container, Table } from './styles'
import { MdMoreHoriz } from 'react-icons/md'

export default function Problems() {
  const [problems, setProblems] = useState([])

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`problems`)
      setProblems(response.data)
    }
    loadProblems()
  }, [])

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Problem</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <div>#{problem.order_id}</div>
              </td>
              <td>
                <div>
                  <span>{problem.description}</span>
                </div>
              </td>
              <td>
                <div>
                  <button>
                    <MdMoreHoriz />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
