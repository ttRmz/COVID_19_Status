import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './i18n'
import './index.scss'
import { FollowingCountriesProvider } from './contexts/follow'

global.APP_VERSION = process.env.REACT_APP_VERSION
global.APP_NAME = process.env.REACT_APP_NAME

const mountingPoint = document.getElementById(
  process.env.REACT_APP_MOUNTING_POINT_ID,
)

ReactDOM.render(
  <FollowingCountriesProvider>
    <App />
  </FollowingCountriesProvider>,
  mountingPoint,
)
