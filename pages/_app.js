import { Toaster } from 'react-hot-toast'
import '../assets/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
      <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
        <Component {...pageProps} />
  </>)
}