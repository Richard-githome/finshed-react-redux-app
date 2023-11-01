import { Toaster } from 'react-hot-toast'
import ContentLayoutComponent from './components/ContentLayoutComponent'
import HeaderComponent from './components/HeaderComponent'
import styles from './styles/App.module.css'

function App() {

  return (
    <>
    <div className={styles.App_body}>
      <HeaderComponent />
      <ContentLayoutComponent/>
    </div>
    <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1.4rem" } }}
      />

    </>
  )
}

export default App
