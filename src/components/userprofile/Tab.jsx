import React ,{useState} from "react";
import PCard from "../Detail/PCard";

function Tab(props) {

  const[tab,setTab]= useState(1);
  const setTabClick = (event, param) => {
   setTab(param)
  };

  return (
    
    <div className="container p-6">
  
      <div className="text-sm font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2" >
            <a 
              onClick={event => setTabClick(event, 1)}
              href="#"
              className={tab==1?"inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
            >
              All
            </a>
          </li>
          <li className="mr-2">
            <a
            onClick={event => setTabClick(event, 2)}
              href="#"
              className={tab==2?"inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
            >
              Vehicles
            </a>
          </li>
          <li className="mr-2">
            <a
            onClick={event => setTabClick(event, 3)}
              href="#"
              className={tab==3?"inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
            >
              Machinery
            </a>
          </li>
          <li className="mr-2">
            <a
            onClick={event => setTabClick(event, 4)}
              href="#"
              className={tab==4?"inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
            >
              Property
            </a>
          </li>
        </ul>

        <div className="tab-content" id="tabs-tabContent">
          <div
            className= {tab==1?"tab-pane fade show active":"hidden"}
          
          >
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3 grid-cols-1 my-16  ">
              <PCard
                toggle={props.toggle}
                isFreeContact={false}
                cardTitle="Duis at nisi quis sapien"
                money="$2500/mo"
                desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              />
              <PCard
                toggle={props.toggle}
                isFreeContact={true}
                cardTitle="Praesent effciturvehi"
                money="$500/mo"
                desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              />

              <PCard
                toggle={props.toggle}
                isFreeContact={false}
                cardTitle="Duis at nisi quis sapien"
                money="$2500/mo"
                desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              />
            </div>
          </div>
          <div
           className= {tab==2?"tab-pane fade show active":"hidden"}
          >
            Tab 2 content
          </div>
          <div
           className= {tab==3?"tab-pane fade show active":"hidden"}
          >
            Tab 3 content
          </div>
          <div
            className= {tab==4?"tab-pane fade show active":"hidden"}
          >
            Tab 4 content
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
