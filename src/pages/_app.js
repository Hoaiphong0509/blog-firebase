import Navbar from 'src/components/NavBar'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { UserContext } from 'src/lib/context'
import { useUserData } from 'src/lib/hooks'

export default function App({ Component, pageProps }) {
  const userData = useUserData()

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  )
}
