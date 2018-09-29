import React, { Component } from 'react';

export default class FooterComponent extends Component {
  	render() {
	    return (
			<div className="footer">
				<footer className="site-footer"> 
					<div className="container"> 
						<div className="row"> 
							<div className="col-md-1"></div>
							<div className="col-md-10"> 
								<ul className="list-links"> 
									<li><a href="">Search</a></li> 
									<li><a href="">About Us</a></li> 
									<li><a href="">Register as User</a></li> 
									<li><a href=""></a></li>
									<li><a href="">Register As Driver</a></li>
									<li><a href="">Request Info</a></li> 
									<li><a href="">Tips</a></li>
									<li><a href="">Privacy Policy</a></li> 
								</ul> 
							</div>
							<div className="col-md-1"></div>
						</div>
					</div>
					<p className="small-text"> 
						copyright © 2018
					</p> 
				</footer>
			</div>
	    );
  	}
}