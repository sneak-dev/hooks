import React, { useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'


const window = Dimensions.get('window')
const screen = Dimensions.get('screen')

export default () => {
  const [dimensions, setDimensions] = useState({
    window, screen
  })

  const onChange = ({ window, screen }: { window: ScaledSize, screen: ScaledSize }) => {
    setDimensions({ window, screen })
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange)

    return () => Dimensions.removeEventListener('change', onChange)
  }, [])

  return dimensions
}
