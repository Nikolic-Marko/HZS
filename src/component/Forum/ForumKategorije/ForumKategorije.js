import React from 'react'
import classes from './ForumKategorije.module.css'

const ForumKategorije = () => {
  return (
    <div className={classes.ForumKategorije}>
      <div className={classes.Kartica}>PITANJA I PROBLEMI</div>
      <div className={classes.Kartica}>TAKMICENJA?</div>
      <div className={classes.Kartica}>OSTALO</div>
    </div>
  )
}

export default ForumKategorije
