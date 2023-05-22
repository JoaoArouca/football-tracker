import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export const FootballContext = createContext({} as any)

interface FootballProviderProps {
  children: ReactNode
}

export function FootballProvider({ children }: FootballProviderProps) {
  const [data, setData] = useState([])

  async function loadData() {
    const response = await api.get('countries')

    setData(response.data)
  }

  const globalState = {
    data,
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <FootballContext.Provider value={globalState}>
      {children}
    </FootballContext.Provider>
  )
}
