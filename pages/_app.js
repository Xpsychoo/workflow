import React, { useState } from 'react'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/newstyle.css'
import '../styles/style.css'
import DashboardHead from './Components/DashboardHead'
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Login from './Components/login';
import { validEmail } from '../Service/regex.js'
import { ToastContainer } from 'react-nextjs-toast';

function MyApp({ Component, pageProps }) {

  const [logOut, setlogOut] = useState(false)

  return <>

    <ToastContainer />
    {logOut ?
      <Login setlogOut={setlogOut}/> :
      <div className="dashboard-main-wrapper">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <DashboardHead setlogOut={setlogOut} />
        <Sidebar />

        <div className='dashboard-wrapper'>
          <Component {...pageProps} />
          <Footer />
        </div>

      </div>
    }

  </>

}

export default MyApp
