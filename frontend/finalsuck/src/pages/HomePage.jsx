import React from 'react'
import Calendar from '../components/Calendar'

const HomePage = ({data}) => {
  return (
    <div>
        <Calendar data={data}/>
    </div>
  )
}

export default HomePage