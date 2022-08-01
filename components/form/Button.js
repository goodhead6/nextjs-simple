import React from 'react'
import styles from "../../styles/Home.module.css";


function Button({text = 'hi'}) {
  return (
    <input className={styles.button} type="submit" value={text}/>
  )
}

export default Button