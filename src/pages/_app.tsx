import '../styles/global.css'

import { ChallangeContext, ChallangeProvider } from '../contexts/ChallangeContext'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
