import { Link } from "react-router-dom";

function Garage({ vehicleList }) {
	return (
		<>
			<h2>Garage</h2>
			<p>
				The Number Of Cars in The Garage : <b>{vehicleList.length}</b>
			</p>
			<ul>
				{vehicleList.map((item, index) => {
					return (
						<li key={index}>
							<p>Check In : {item.checkin}</p>
							<p>Driver Name : {item.driverName}</p>
							<p>Vehicle Number : {item.vehicleNumber}</p>
						</li>
					);
				})}
			</ul>
			<Link to="/" className="btn btn-primary">
				Add Vehicle
			</Link>
		</>
	);
}

export default Garage;
