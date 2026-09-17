import { useState, useEffect } from 'react'

function useDebounce<T>(giaTri: T, doTre: number): T {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri)

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setGiaTriDaTre(giaTri)
    }, doTre)

    return () => {
      clearTimeout(idTimeout)
    }
  }, [giaTri, doTre])

  return giaTriDaTre
}

export default useDebounce
