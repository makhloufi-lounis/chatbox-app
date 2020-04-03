import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'
import Formulaire from './Componants/Formulaire'
import Message from './Componants/Message'

// Firebase
import base from './base'

// Animations
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messageRef = createRef()

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate() {
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = (message) => {
    const messages = {...this.state.messages}

    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })

    this.setState( { messages })
  }

  //isUser = pseudo => pseudo === this.state.pseudo
  isUser = (pseudo) => {
    return pseudo === this.state.pseudo
  }

  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(messageId => (
        <CSSTransition
          timeout={500}
          classNames='fade'
          key={messageId}>
            <Message 
              isUser={this.isUser}
              pseudo={this.state.messages[messageId].pseudo}
              message={this.state.messages[messageId].message}
            />
        </CSSTransition>
        
      )
    )
    return (
      <div className='box' style={{border:'1px solid #ECEFF1', borderRadius: '3px'}}>
        <div>
            <div className='messages' ref={this.messageRef}>
              <TransitionGroup className="message">
                { messages }
              </TransitionGroup>
            </div>
        </div>
        <Formulaire 
          length={140}
          addMessage={this.addMessage} 
          pseudo={this.state.pseudo} />
      </div>
    )
  }
}

export default App
