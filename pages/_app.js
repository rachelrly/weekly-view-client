import '../styles/styles.sass'
import UserContextProvider from '../contexts/userContext'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </UserContextProvider>)
}

export default MyApp
