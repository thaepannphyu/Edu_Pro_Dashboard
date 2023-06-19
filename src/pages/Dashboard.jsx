import React from 'react'
import Progress from '../components/dashboard-componentes/Progress'
import LineChart from '../components/dashboard-componentes/LineChart'
import DoughnutChart from '../components/dashboard-componentes/DoughnutChart'

const Dashboard = () => {
  return (
    <div className=' h-screen'>
      <Progress />
      <LineChart/>
      <DoughnutChart/>
    </div>
  )
}
export default Dashboard