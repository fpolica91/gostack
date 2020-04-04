import React, { useState, useEffect, useMemo } from 'react'
import api from '~/services/api'
import history from '~/services/history'
import { Container, Table, Controls } from './styles'
import { MdMoreHoriz, MdAdd } from 'react-icons/md'

export default function Recipients() {
  const [recipients, setRecipients] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get(`recipients?name=${query}`)
      setRecipients(response.data)
    }
    loadRecipients()
  }, [query])

  const formattedRecipient = useMemo(
    () =>
      recipients.map((r) => ({
        id: r.id,
        name: r.name,
        address: `${r.street} ${r.city}, ${r.state}, ${r.zip}`,
      })),
    [recipients]
  )

  function handleNavigation() {
    history.push('/recipient/new')
  }

  return (
    <Container>
      <Controls>
        <div>
          <h2>Recipient management</h2>
          <input
            type="text"
            placeholder="Search orders"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
        <button onClick={handleNavigation}>
          <MdAdd color="#FFF" size={16} />
          Add
        </button>
      </Controls>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formattedRecipient.map((recipient) => (
            <tr key={recipient.id}>
              <td>
                <div>#{recipient.id}</div>
              </td>
              <td>
                <div>
                  <span>{recipient.name}</span>
                </div>
              </td>
              <td>
                <div>
                  <span>{recipient.address}</span>
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
