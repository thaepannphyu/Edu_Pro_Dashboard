import React from 'react'
import Progress from '../components/dashboard-componentes/Progress'
import LineChart from '../components/dashboard-componentes/LineChart'
import DoughnutChart from '../components/dashboard-componentes/DoughnutChart'

const Dashboard = () => {
  return (
    <div className=''>
      <Progress />
      <div className=' flex justify-center gap-8 my-8'>
      <LineChart/>
      <DoughnutChart/>
      </div>
    </div>
  )
}
export default Dashboard