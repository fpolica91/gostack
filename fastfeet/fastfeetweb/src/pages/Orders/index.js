import React, { useState, useEffect, useMemo } from 'react'
import api from '~/services/api'

import { Container, Table } from './styles'

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get('/orders')
      setOrders(response.data)
    }
    fetchOrders()
  }, [])

  return (
    <Container>
      <Table>
        <thead>
          <th>One</th>
          <th>two</th>
        </thead>
      </Table>
    </Container>
  )
}
