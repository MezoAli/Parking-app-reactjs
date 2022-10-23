import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CarData({ setVehicleList }) {
	const [vehicleNumber, setVehicleNumber] = useState("");
	const [driverName, setDriverName] = useState("");
	const navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		const today = new Date();
		const humanRedable = today.toLocaleTimeString();
		setVehicleList((prevState) => {
			return [
				...prevState,
				{ vehicleNumber, driverName, checkin: humanRedable },
			];
		});
		setDriverName("");
		setVehicleNumber("");
		navigate("/garage");
	};
	return (
		<>
			<div className="container">
				<form onSubmit={submitHandler}>
					<label htmlFor="car" className="form-label">
						Vehicle Number
					</label>
					<input
						className="form-control"
						type="text"
						id="car"
						value={vehicleNumber}
						onChange={(e) => setVehicleNumber(e.target.value)}
					/>
					<label htmlFor="dirver" className="form-label">
						Driver Name
					</label>
					<input
						className="form-control mb-2"
						type="text"
						id="dirver"
						value={driverName}
						onChange={(e) => setDriverName(e.target.value)}
					/>
					<button type="submit" className="btn btn-primary mb-5">
						Add Vehicle
					</button>
				</form>
				<Link to="/garage" className="btn btn-info">
					Go To Garage
				</Link>
			</div>
		</>
	);
}

export default CarData;
