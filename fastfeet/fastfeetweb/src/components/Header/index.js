import React from 'react'
import { Container, Content, Profile } from './styles'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '~/assets/fastfeet-logo.png'

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fastfeetLogo" />
        </nav>
        <aside>
          <Link to="/orders">Orders</Link>
          <Link to="/couriers">Couriers</Link>
          <Link to="/recipients">Recipients</Link>
          <Link to="/problems">Problems</Link>
          <Profile>
            <div>
              <strong>FastFeet Admin</strong>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
