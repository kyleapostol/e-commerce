import React from 'react';

export default class LandingPage extends React.Component{
    
    render(){
        return(
            <div className="landing-page-body">
                <div className="landing-page">
                    <div className="disclaimer-container">
                        <div className="disclaimer-content text-center landing-page-description">
                            <b>Terms of Use</b>
                            <p>No information will be stored and this is a demonstration of my skills and all contents do not belong to me.</p>
                            <p>By clicking the box acknowledges that this is for demostration purposes only.</p>
                            <button type="button" className="btn btn-secondary" onClick= { () => this.props.setView('catalog', {})}>Agree</button>
                        </div>
                    </div>
                </div>
            </div>      
        )
    }
}