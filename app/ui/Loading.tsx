"use client"
import { ColorRing } from "react-loader-spinner";

export function Loading() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#2196f3', '#2196f3', '#2196f3', '#2196f3', '#2196f3']}
    />
  )
}