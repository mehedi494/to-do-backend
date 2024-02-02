import React from 'react'
import { Outlet } from 'react-router-dom'
import DocsHeader from '../ui/DocsHeader/DocsHeader'
import DocsSideBar from '../ui/DocsSideBar/DocsSideBar'

export default function Documents({children}) {
  return (
    <div>
      <DocsHeader></DocsHeader>
      <DocsSideBar></DocsSideBar>
      <Outlet>
        {children}
      </Outlet>
    </div>
  )
}
