import React from "react";
import {Link} from "react-router-dom"


 class NavMain extends React.Component {
    render() {
        return (
            <div>
                  <Link to={'/'}>
                    <div className="container">
                        Home
                    </div>
                </Link>
                <Link to={'/temperature'}>
                    <div className="container">
                        Temperature
                    </div>
                </Link>
                <Link to={"/customize-image"}>
                    <div className="container">
                        customize image
                    </div>
                </Link>
                
            </div>
        )
    }
}




export default NavMain
