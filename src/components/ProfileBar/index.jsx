import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from './profile-bar.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired
}

function ProfileBar ({ picture, username, onOpenText }) {
  return (
    <div className={ styles.root }>
      <Link to='/profile'>
        <figure>
          <img className={ styles.avatar } src={ picture } />
        </figure>
        <span className={ styles.username }>Hola @{ username }</span>
        <button onClick={ onOpenText } className={ styles.button }>
          <span className="fa fa-lg fa-edit"></span> Tweet!
        </button>
      </Link>
    </div>
  )
}

ProfileBar.propTypes = propTypes

export default ProfileBar
