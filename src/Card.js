import React from 'react'

import place from './Assets/Fill 219.png'
const Card = (props) => {
  return (
		<>
			<div className="container">
				<div className="card">
					<div>
						<img src={props.item.img} alt="" className="card-photo" />
					</div>
					<div className="card-details">
						<div className="card-location">
							<img src={place} alt="" />
							<span>{props.item.location}</span>
							<a href={props.item.site}>View on Google Maps</a>
						</div>
						<div className="card-more">
							<h1>{props.item.title}</h1>
							<h4>{props.item.dates}</h4>
							<p>{props.item.desc}</p>
						</div>
					</div>
				</div>
        <hr/>
			</div>
		</>
	)
}

export default Card