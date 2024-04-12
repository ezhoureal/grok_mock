"use server"
import styles from "./Loading.module.scss"

export async function Loading() {
  return (
    <svg className={styles.spinner}>
      <circle cx="20" cy="20" r="18"></circle>
    </svg>
  )
}