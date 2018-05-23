import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2>
        <Link
          to="/aprenda"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Aprenda
        </Link>
      </h2>
      <h2>
        <Link
          to="/blog"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Blog
        </Link>
      </h2>
      <h2>
        <Link
          to="/associe-se"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Associe-se
        </Link>
      </h2>
      <h2>
        <Link
          to="/sobre"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Sobre
        </Link>
      </h2>
    </div>
  </div>
)

export default Header
