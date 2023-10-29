import { ReactNode, createContext } from 'react'

interface CartContextType {}

export const CoffeeContext = createContext({} as CartContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CoffeeContextProviderProps) {
  const contextValues = {}

  return (
    <CoffeeContext.Provider value={contextValues}>
      {children}
    </CoffeeContext.Provider>
  )
}
