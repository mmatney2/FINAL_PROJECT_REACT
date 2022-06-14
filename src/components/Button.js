import React from 'react'
// import MUIButton from '@mui/material/Button';

export default function Button({children, variant, ...props}) {
    

  return (
    <Button variant={variant ?? "contained"} {...props}>{children}</Button>
  )
}


