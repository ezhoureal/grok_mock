import React from "react"
import styles from "./Loading.module.css"

export function Loading() {
  return (
    <React.Fragment>
      <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
      <p>Checking your account status</p>
    </React.Fragment>
  )
}