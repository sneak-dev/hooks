import React, { useEffect, useState } from 'react'
import { NetInfo } from 'react-native'


const inititalState = {
  type: null, effectiveType: null
}

export default () => {
  const [netInfo, setNetInfo] = useState(inititalState)

  const onChange = (newState) => {
    setNetInfo(newState)
  }

  useEffect(() => {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      setNetInfo(connectionInfo)
    })
  }, [])

  useEffect(() => {
    NetInfo.addEventListener('connectionChange', onChange)

    return () => {
      NetInfo.removeEventListener('connectionChange', onChange)
    }
  }, [])

  return netInfo
}
