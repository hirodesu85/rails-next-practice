import { css } from '@emotion/react'
import { Button } from '@mui/material'
import type { NextPage } from 'next'

const buttonCSS = css({
  padding: '24px',
})

const HelloMui: NextPage = () => {
  return (
    <>
      <Button variant="contained" css={buttonCSS}>
        Button1
      </Button>
      <Button variant="outlined" css={buttonCSS}>
        Button2
      </Button>
      <Button variant="contained" color="error" css={buttonCSS}>
        Button3
      </Button>
    </>
  )
}

export default HelloMui
