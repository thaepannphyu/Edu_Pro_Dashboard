import React from 'react'
import LineChart from '../components/dashboard-componentes/LineChart'

const Dashboard = () => {
  return (
    <div className=' h-screen'>
      <LineChart/>
      <Progress />
    </div>
  )
}
export default Dashboard