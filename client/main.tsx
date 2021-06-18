import { render } from 'react-dom'
import React from 'react'

// Meteor
import { Meteor } from 'meteor/meteor'
import { Tracker } from "meteor/tracker"

// Components
import App from '../imports/ui/components/App'

Meteor.startup(() => {
  Tracker.autorun(() => {
    const userReady:boolean = Meteor.subscribe('users.all').ready()
    if (userReady) {
      render(<App />, document.getElementById('react-target'))
    } else {
      console.log("user not ready")
    }
  })
})
