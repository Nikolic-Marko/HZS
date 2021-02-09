import React from 'react'
import Header from '../Header'
import ForumNavigacija from './ForumNavigacija/ForumNavigacija'
import classes from './Forum.module.css'
import ForumKategorije from './ForumKategorije/ForumKategorije'
import ForumLatest from './ForumLatest/ForumLatest'

const Forum = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={classes.Background}>
        <div className={classes.Forum}>
          <ForumNavigacija />
          <div className={classes.ForumCentar}>
            <ForumKategorije />
            <ForumLatest />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Forum
