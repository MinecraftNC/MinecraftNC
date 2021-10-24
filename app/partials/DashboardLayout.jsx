import React from "react"
import Sidebar from "./Sidebar"
import { motion } from "framer-motion"

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main>
        <motion.div className="container opacity-0" animate={{ opacity: 1 }}>
          <Sidebar />
        </motion.div>
        <div className="container h-screen p-8">{children}</div>
      </main>
    </>
  )
}

export default DashboardLayout
