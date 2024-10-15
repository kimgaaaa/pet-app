import React, {useState} from 'react';
import './Tab.scss';

const Tab = (tabs, tabsData) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const handleTabClick=(tab) => {
        setActiveTab(tab);
    }
    const filterData=tabsData.filter((a)=>a.category===activeTab)
    return (
        <div className='tab'>
            <div className="tab-menu">
                {tabs.map((tab)=>(
                    <button key={tab.label} className={activeTab===tab.value?'active':''} onClick={()=> handleTabClick(tab.label)}>{tab.label}</button>
                ))}
            </div>
        </div>
    );
};

export default Tab;