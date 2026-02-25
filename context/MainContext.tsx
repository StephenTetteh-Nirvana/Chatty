'use client'

import { createContext, useContext, useState } from "react"

// define the type of the context values
type ContextType = {
  showDeleteCard: boolean,
  setShowDeleteCard: (value: boolean) => void
}

// default values instead of undefined to prevent errors because provider will be global.
const MainContext = createContext<ContextType>({
    showDeleteCard: false,
    setShowDeleteCard: () => {}
})

export const MainContextProvider = ({children}: {children: React.ReactNode}) => {
  const [showDeleteCard, setShowDeleteCard] = useState(false)

  // values to be passed to the provider
  const value = {
    showDeleteCard,
    setShowDeleteCard
  }

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}


//export a custom hook to use the context values
export const useMainContext = () => {
  const context = useContext(MainContext)
  if(context === undefined) {
    throw new Error("useMainContext must be used within an MainContextProvider")
  }

  return context
}