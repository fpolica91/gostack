import React from 'react'
import { Form } from '@unform/web'
import Select from './Components/Select'
import Input from './Components/Input'
import api from '~/services/api'
import history from '~/services/history'

export default function CreateOrder() {
  async function handleSubmit({ courier_id, recipient_id, product }) {
    await api.post('orders', { recipient_id, courier_id, product })
    history.push('/orders')
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Select name="courier_id" path={`/couriers?name`} />
        <Select name="recipient_id" path={`recipients/?name`} />
        <Input name="product" />
        <button>Submit</button>
      </Form>
    </>
  )
}
