import {
  Appbar,
  Balance,
  Users,
} from '../components'

const Dashboard = () => {
  return (
    <div className='pt-20 w-[90%] mx-auto max-w-[1440px]'>
      <Appbar/>
      <Balance amount={"10,000"}/>
      <Users/>
    </div>
  )
}

export default Dashboard
