import React from 'react';

export default class LandingPage extends React.Component{
    
    render(){
        return(
            <div>
                <div className="landing-page">
                    <div className="disclaimer-container">
                        <div className="disclaimer-content text-center landing-page-description">
                            <b>Terms of Use</b>
                            <p>This Website is not a real Website! Its a demonstration of my skills and all contents do not belong to me.</p>
                            <input type="radio" className="form-control" aria-label="Radio button for following text input" 
                            onClick= { () => this.props.setView('catalog', {})}/>
                            <p>By clicking the box acknowledges that this is for demostration purposes only.</p>
                        </div>
                    </div>
                </div>
            </div>      
        )
    }
}