import {useEffect, useState} from 'react'
import {Dimensions, ScaledSize} from 'react-native'

const initialState = {
  window: Dimensions.get('window'),
  screen: Dimensions.get('screen'),
}

export default function useDimensions() {
  const [dimensions, setDimensions] = useState(initialState)

  const onChange = ({
    window,
    screen,
  }: {
    window: ScaledSize
    screen: ScaledSize
  }) => {
    setDimensions({window, screen})
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange)

    return () => Dimensions.removeEventListener('change', onChange)
  }, [])

  return dimensions
}
