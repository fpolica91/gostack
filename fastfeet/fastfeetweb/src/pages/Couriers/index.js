import React, { useState, useEffect } from 'react'
import api from '~/services/api'
import history from '~/services/history'
import { Container, Table, Controls, Avatar } from './styles'
import { MdMoreHoriz, MdAdd } from 'react-icons/md'

export default function Couriers() {
  const [couriers, setCouriers] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function loadCouriers() {
      const response = await api.get(`/couriers?name=${query}`)
      const courierList = response.data.map(courier => ({
        ...courier,
        image: courier.File ? courier.File.url : null
      }))
      setCouriers(courierList)
    }
    loadCouriers()
  }, [query])

  function handleNavigation() {
    history.push('courier/new')
  }

  return (
    <Container>
      <Controls>
        <div>
          <h2>Courier management</h2>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search orders"
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
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {couriers.map(courier => (
            <tr key={courier.id}>
              <td>
                <div>{courier.id}</div>
              </td>
              <td>
                <div>
                  <Avatar
                    src={
                      courier.image ||
                      'https://api.adorable.io/avatars/47/abott@adorable.paddingHorizontal'
                    }
                    alt="avatar"
                  />
                </div>
              </td>
              <td>
                <div>
                  <span>{courier.name}</span>
                </div>
              </td>
              <td>
                <div>
                  <span>{courier.email}</span>
                </div>
              </td>
              <td>
                <div>
                  <span>
                    <MdMoreHoriz />
                  </span>
                </div>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>
              <div>#3</div>
            </td>
            <td>
              <div>
                <span>JD</span>
              </div>
            </td>
            <td>
              <div>
                <span>John Doe</span>
              </div>
            </td>
            <td>
              <div>
                <span>John@gmail.com</span>
              </div>
            </td>
            <td>
              <div>
                <span>
                  <MdMoreHoriz />
                </span>
              </div>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </Container>
  )
}
