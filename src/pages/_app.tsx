import '../styles/global.css'

import { ChallangeContext, ChallangeProvider } from '../contexts/ChallangeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallangeProvider>
      <Component {...pageProps} />
    </ChallangeProvider>
  )
}

export default MyApp
