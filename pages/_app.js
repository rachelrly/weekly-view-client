import '../styles/styles.sass'
import UserContextProvider from '../contexts/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>)
}

export default MyApp
