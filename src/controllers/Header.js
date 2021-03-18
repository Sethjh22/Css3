import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            nav: 'closed'
        }
    }

    nav = () =>{
        if(this.state.nav === 'closed'){
            this.setState({nav: 'open'})
        }else{
            this.setState({nav: 'closed'})
        }
    }

    render(){
        return(
            <div className='websiteHeader'>

            <header className="websiteHead">
                <h1>Start Bootstrap</h1>
                <button onClick={this.nav} className='menuButton'>
                <h1>MENU</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhIPKEFv8hMU8O06_6X3zyjRmGL5bHewtbg&usqp=CAU"></img>
                </button>

            </header>
                <ul className={this.state.nav === 'closed' ? 'closed' : ''}>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>

                </ul>
            
            </div>
            )
    }
}

export default Header