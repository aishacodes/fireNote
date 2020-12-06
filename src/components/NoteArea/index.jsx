import React from 'react'


import './NoteArea.css'

import ToggleSidebarIcon from '../icons/ToggleSidebarIcon'
import HistoryIcon from '../icons/HistoryIcon'
import ShareIcon from '../icons/ShareIcon'
import TrashIcon from '../icons/TrashIcon'
import InfoIcon from '../icons/InfoIcon'

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="left">
      <ToggleSidebarIcon style= {{width:'24px', fill: '#618df2'}} />
      </div>
      <div className="right">
      <HistoryIcon style= {{width:'24px', fill: '#618df2'}} />
      <ShareIcon style= {{width:'24px', fill: '#618df2',  marginLeft: '1.3rem'}} />
      <TrashIcon style= {{width:'24px', fill: '#618df2',  marginLeft: '1.3rem'}} />
      <InfoIcon style= {{width:'24px', fill: '#618df2',  marginLeft: '1.3rem'}}/>
      </div>
    </div>
  )
}


function index() {
  return (
    <div>
      <TopBar />
      
    </div>
  )
}

export default index
