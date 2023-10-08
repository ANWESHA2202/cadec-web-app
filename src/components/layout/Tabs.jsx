import tabs from '../Tabs/tabs.json'
import Tab from '../Tabs/Tab'
const Tabs = () => {
  return (
    <div className='flex justify-around'>
        {tabs.tabs?.map((tab,idx)=>{
            return (
                <div className="" key={idx}>
                    <Tab tab={tab}/>
                </div>
            )
        })}
    </div>
  )
}

export default Tabs