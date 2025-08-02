import React from 'react'
import { cswt } from './CustomClass'

const Container = ({children,className}) => {
  return  <section className={cswt('max-w-[1440px] mx-auto ',className)}>
    {children}
    </section>
  
}

export default Container