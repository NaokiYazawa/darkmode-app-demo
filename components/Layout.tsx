import React, { ReactNode } from 'react'
import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitch'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => (
  <div>
    <header>
      <div className="mx-auto max-w-5xl px-8">
        <div className="flex items-center justify-between py-6">
          <Navigation />
          <ThemeSwitch />
        </div>
      </div>
    </header>
    <main>{props.children}</main>
  </div>
)

export default Layout
