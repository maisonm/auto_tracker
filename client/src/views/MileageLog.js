import React, { Component } from 'react';


class MileageLog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			startingOdometer: [],
			endingOdometer: []
		}
	}

	render() {

		const mileageLogPanel = (
				
					<div className='tripLogPanel'>
						<div className='date'>04-01-18</div>
							<div className='totalTrip'>
							   <p>Total Trip: <span>176mi.</span></p>
							</div>
						<div className='odometer'>
							<div className='odoReadouts'> 
							   <p>Starting Odometer:</p> <span>100,323</span>
							</div>
							<div className='odoReadouts'>
							   <p className='odoEnding'>Ending Odometer:</p> <span className='endingMileage'>100,500</span>
							</div>
						</div>
					</div>
		)
		return(
			<div className='mileageLogContainer'>
				<p>Mileage Log</p>

				<div className='infoCard'>
					{mileageLogPanel}
					{mileageLogPanel}
					{mileageLogPanel}
					{mileageLogPanel}
					{mileageLogPanel}
					{mileageLogPanel}
				</div>

			</div>
		)
	}


}

export default MileageLog;