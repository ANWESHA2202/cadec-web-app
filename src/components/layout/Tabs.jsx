import tabs from '../Tabs/tabs.json'
import Tab from '../Tabs/Tab'
const Tabs = () => {
  return (
    <div className='flex justify-around'>
        {tabs.tabs?.map((tab,idx)=>{
            return (
                <a className="" key={idx} href={tab.link}>
                    <Tab tab={tab}/>
                </a>
            )
        })}
    </div>
  )
}

export default Tabs