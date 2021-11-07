import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import * as ButtonMaterial from '@material-ui/core/Button'
import { Button as GrommetButton } from 'grommet'
import 'antd/dist/antd.css'
import Typography from './Typography'

function App () {
  const [CompB, setCompB] = useState(null)
  const [currentStateBtn, setCurrentBtn] = useState('material')

  const ss = async importedLib => {
    const Mod = await importedLib
    const Updated = {
      ...Mod.default,
      defaultProps: {
        variant: 'contained',
        color: 'primary'
      }
    }
    // variant="contained" color="primary"

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
    console.log(Updated)
    setCompB(() => Updated)
  }

  const ssa = async importedLib => {
    const Mod = await importedLib
    setCompB(() => Mod.Button)
    // console.log();
  }

  useEffect(
    () => {
      // console.log(currentStateBtn);
      if (currentStateBtn === 'material') {
        ss(import('@material-ui/core/Button'))
      }
      if (currentStateBtn === 'grommet') {
        ssb(import('grommet'))
      }
      if (currentStateBtn === 'antd') {
        // Ant Design Trigger error when I trying to write directly to Hook
        ssa(import('antd'))
      }
    },
    [currentStateBtn]
  )

  const Re = function (Comp) {
    // label="Primary" primary type="primary"
    return <Comp>Primary</Comp>
  }

  return (
    <div className='App'>
      <ul>
        {['material', 'grommet', 'antd'].map(item => {
          return (
            <button key={item} onClick={() => setCurrentBtn(item)}>
              {item}
            </button>
          )
        })}
      </ul>
      <div>{CompB && Re(CompB)}</div>
      <div>
        <Typography />
      </div>
    </div>
  )
}

export default App

/**
 * Grommet
 * Should be label, to create good text
 *
 * minimum default props
 */
