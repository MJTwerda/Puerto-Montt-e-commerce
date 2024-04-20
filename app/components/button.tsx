'use client'
import React from "react"

interface Props {
  label: string | React.ReactNode;
  action: (e?: any) => void;
  className: string;
  disabled?: boolean;
}

const CommonButton = (props: Props) => {
  return (
    <button
      className={props.className}
      onClick={props.action}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  )
}

export default CommonButton;