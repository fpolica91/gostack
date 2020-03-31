import React, { useEffect, useState, useMemo } from 'react'
import api from '~/services/api'
// import AsyncSelect from 'react-select/async'
import Select from 'react-select'
import { Form } from '@rocketseat/unform'
import { Container } from './styles'

export default function CreateOrder() {
  const [couriers, setCourriers] = useState([])
  const [courier, setCourier] = useState({})

  // const [recipients, setRecipients] = useState([])

  useEffect(() => {
    async function loadItems() {
      const response = await api.get(`/couriers?name=`)
      setCourriers(response.data)
    }
    loadItems()
  }, [])

  const defaultOptions = useMemo(
    () =>
      couriers.map(c => ({
        label: c.name,
        value: c.id
      })),
    [couriers]
  )

  return (
    <>
      <Container>
        <Form>
          <Select
            value={courier}
            options={defaultOptions}
            onChange={value => setCourier(value)}
          />
          <button>Submit</button>
        </Form>
      </Container>
    </>
  )
}
