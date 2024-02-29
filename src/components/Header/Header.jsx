import { useState } from 'react'
import ModalAbout from '../Modal'

const Header = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light'>
        <a
          href='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
        >
          <svg className='bi me-2' width={40} height={32}>
            <use xlinkHref='#bootstrap' />
          </svg>
          <span className='fs-4'>Tv Shows</span>
        </a>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <a href='/' className='nav-link' aria-current='page'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/' className='nav-link'>
              Features
            </a>
          </li>
          <li className='nav-item' onClick={handleShow}>
            <a className='nav-link'>
              About
            </a>
          </li>
        </ul>
      </header>
      <ModalAbout show={show} handleClose={handleClose} />

    </>
  )
}

export default Header
