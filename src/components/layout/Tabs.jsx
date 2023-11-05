import tabs from '../Tabs/tabs.json';
import Tab from '../Tabs/Tab';
import '../hideScrollbar.css'
import { useLocation } from 'react-router-dom';

const pathEnum={
  '/':'home',
  '/study-materials':'study-materials',
  '/assignments':'assignments',
}

const Tabs = () => {
  const location=useLocation();
  return (
    <div className="flex gap-20 items-center scrollable-container ml-10" style={{ overflowX: "scroll" }}>
      {pathEnum[location?.pathname]!=='home'&&<div className='text-red-500 cursor-pointer'>
        <a href='/'>&gt;home&gt;</a>
      </div>}
      {tabs[`${pathEnum[location?.pathname]}`]?.map((tab, idx) => (
        <a className="" key={idx} href={tab.link}>
          <Tab tab={tab} />
        </a>
      ))}
    </div>
  );
}

export default Tabs;
