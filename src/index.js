import React from 'react'
import { render } from 'react-dom'

import App from './App'

import '@fontsource/abril-fatface'
import '@fontsource/source-sans-pro/300.css'
import '@fontsource/source-sans-pro/600.css'
import '@fontsource/source-sans-pro/700.css'
import './styles/variables.scss'
import './styles/global.scss'

render(<App />, document.getElementById('root'))
