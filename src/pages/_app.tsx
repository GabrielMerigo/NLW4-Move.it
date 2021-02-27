import '../styles/global.css'

import { ChallangeContext } from '../contexts/ChallangeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallangeContext.Provider value={"teste"}>
      <Component {...pageProps} />
    </ChallangeContext.Provider>
  )
}

export default MyApp
