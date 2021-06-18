import { render } from 'react-dom'
import React from 'react'

// Meteor
import { Meteor } from 'meteor/meteor'

// Components
import App from '../imports/ui/components/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'))
})
