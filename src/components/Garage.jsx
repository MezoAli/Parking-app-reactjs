import { Link } from "react-router-dom";

function Garage({ vehicleList }) {
	return (
		<div className="container">
			<h2>Garage</h2>
			<p>
				The Number Of Cars in The Garage : <b>{vehicleList.length}</b>
			</p>
			<ul className="list-group">
				{vehicleList.map((item, index) => {
					return (
						<li key={index} className="list-group-item">
							<p>Check In : {item.checkin}</p>
							<p>Driver Name : {item.driverName}</p>
							<p>Vehicle Number : {item.vehicleNumber}</p>
						</li>
					);
				})}
			</ul>
			<Link to="/" className="btn btn-primary my-2">
				Add Vehicle
			</Link>
		</div>
	);
}

export default Garage;
