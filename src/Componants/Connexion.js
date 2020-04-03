import React, {Component} from 'react'
import '../App.css'
import {Redirect} from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        this.setState({ pseudo : event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat : true })
    }

    render () {
        if(this.state.goToChat) {
            //push pemet de garder les pages dans l'historique 
            //(précidant suivant dans le navigateur)
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.pseudo}
                        onChange={ this.handleChange }
                        placeholder='Pseudo'
                        type='text'
                        required />
                    <button type='submit'>Go</button>  
                </form>
            </div>
        )
    }
}

export default Connexion
