import { useEffect, useState } from 'react'

function canCreateWebGLContext() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl'),
    )
  } catch {
    return false
  }
}

function useWebGLSupport() {
  const [supported, setSupported] = useState(null)

  useEffect(() => {
    setSupported(canCreateWebGLContext())
  }, [])

  return supported
}

export default useWebGLSupport
