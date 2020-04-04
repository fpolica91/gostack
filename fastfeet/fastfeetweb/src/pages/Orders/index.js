import React, { useState, useEffect } from 'react'
import api from '~/services/api'
import history from '~/services/history'
import { Container, Table, Span, Courier, Controls, Scroll } from './styles'
import { MdMoreHoriz, MdAdd } from 'react-icons/md'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get(`/orders?product=${query}`)
      const orders = response.data.map((order) => ({
        ...order,
        status:
          order.end_date && !order.cancelled_at
            ? 'delivered'
            : !order.start_date && !order.cancelled_at
            ? 'pending'
            : order.start_date && !order.cancelled_at
            ? 'retrieved'
            : 'cancelled',
        courierInitials: order.courier.name
          .split(' ')
          .map((name) => name[0])
          .join(''),
      }))

      setOrders(orders)
    }
    fetchOrders()
  }, [query])

  function handleNavigation() {
    history.push('/order/new')
  }

  return (
    <Container>
      <Controls>
        <div>
          <h2>Order management</h2>
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
      <Scroll>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Recipient</th>
              <th>Courier</th>
              <th>City</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <span>#{order.id}</span>
                </td>
                <td>
                  <span>{order.recipient.name}</span>
                </td>
                <td>
                  <Courier>
                    <span>{order.courierInitials}</span>
                    {order.courier.name}
                  </Courier>
                </td>
                <td>
                  <span>Miami</span>
                </td>
                <td>
                  <span>FL</span>
                </td>
                <td>
                  <Span statusColor={order.status}>
                    <span>{order.status}</span>
                  </Span>
                </td>
                <td>
                  <button type="button">
                    <MdMoreHoriz size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Scroll>
    </Container>
  )
}
