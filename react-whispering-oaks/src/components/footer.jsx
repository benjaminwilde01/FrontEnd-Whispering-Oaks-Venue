import React from 'react'
import './footer.css'


const Footer = () => {
    return (
      
        <div className="main-footer">
            <div className="container">
                <div className="row">
                   
                    <div className="col">
                        <h4>Whispering Oaks Vineyard</h4>
                        <ul className="list-unstyled">
                            <li>512-423-1809</li>
                            <li>21259 Barrow Road</li>
                            <li>Redding, CA</li>
                        </ul>
                    </div>
                    
                </div>
                <hr/>
                <div className="roq">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} WHISPERING OAKS INC | All Rights Reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
