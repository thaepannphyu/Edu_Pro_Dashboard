import React from 'react'
import LineChart from '../components/dashboard-componentes/LineChart'
import Progress from '../components/dashboard-componentes/Progress'

const Dashboard = () => {
  return (
    <div className=' h-screen'>
      <Progress />
      <LineChart/>
    </div>
  )
}
export default Dashboard