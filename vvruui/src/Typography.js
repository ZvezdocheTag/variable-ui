import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import * as ButtonMaterial from '@material-ui/core/Button'
import { Button as GrommetButton } from 'grommet'
import 'antd/dist/antd.css'
// import Typography from '@material-ui/core/Typography'
// or
import { Typography as MatTypography } from '@material-ui/core'
import { Typography } from 'antd'

const { Title } = Typography

function Typo ({ currentStateBtn }) {
  const [CompB, setCompB] = useState(null)
  // const [currentStateBtn, setCurrentBtn] = useState("material");

  const ss = async importedLib => {
    const Mod = await importedLib
    const Updated = {
      ...Mod.default,
      defaultProps: {
        variant: 'contained',
        color: 'primary'
      }
    }

    setCompB(() => Updated)
  }
  const ssb = async importedLib => {
    const Mod = await importedLib
    const Updated = {
      ...Mod.Button,
      defaultProps: {
        label: 'Submit',
        primary: true,
        style: {
          padding: '4px 22px',
          fontSize: '18px'
        }
      }
    }
    setCompB(() => Updated)
  }

  const ssa = async importedLib => {
    const Mod = await importedLib
    setCompB(() => Mod.Button)
  }

  useEffect(
    () => {
      if (currentStateBtn === 'material') {
        ss(import('@material-ui/core/Button'))
      }
      if (currentStateBtn === 'grommet') {
        ssb(import('grommet'))
      }
      if (currentStateBtn === 'antd') {
        ssa(import('antd'))
      }
    },
    [currentStateBtn]
  )

  const Re = function (Comp) {
    return <Comp>Primary</Comp>
  }

  return (
    <div className='App'>
      <div>::::</div>
      <div>
        <div>
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
        </div>
        <div>
          <MatTypography variant='h1'>h1. Ant Design</MatTypography>
          <MatTypography variant='h2'>h1. Ant Design</MatTypography>
          <MatTypography variant='h3'>h1. Ant Design</MatTypography>
          <MatTypography variant='h4'>h1. Ant Design</MatTypography>
        </div>
      </div>
      <div>{CompB && Re(CompB)}</div>
    </div>
  )
}

export default Typo

/**
 * Grommet
 * Should be label, to create good text
 *
 * minimum default props
 */
