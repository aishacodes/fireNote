import React from 'react'

import './NoteList.css'

import MenuIcon from '../icons/MenuIcon'
import NewNoteIcon from '../icons/NewNoteIcon'

const SerachForm = () => {

  return(
    <div className="SearchForm">
      <form>
          <input type="text" placeholder="All Notes"/>
      </form>
    </div>
  )
}

const Menu = () => {

  return(
    <div className="Menu" >
      <MenuIcon  style= {{width:'24px', fill: '#618df2'}} />
      <SerachForm />
      <NewNoteIcon  style= {{width:'24px', fill: '#618df2'}}/>
    </div>
  )
}


function index() {
  return (
    <div className="NoteList">
      <Menu />
      <div>

      </div>
    </div>
  )
}

export default index
