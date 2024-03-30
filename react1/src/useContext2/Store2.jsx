import React from 'react'
import { Context } from './Context'

export const Store2 = ({children}) => {
const name="Ashish Rangra";
  return (
   
    <Context.Provider  value={{name}}>{children}</Context.Provider>
  )
}
