import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { Container } from './styles'

export default function Create() {
  return (
    <Container>
      <div>
        <h2>Register A Courier</h2>
      </div>
      <Form>
        <Input name="name" type="name" placeholder="John Doe" />
        <Input name="email" type="email" placeholder="Email" />
      </Form>
    </Container>
  )
}
