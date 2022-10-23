import "./App.css";
import CarData from "./components/CarData";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Garage from "./components/Garage";

function App() {
	const [vehicleList, setVehicleList] = useState([]);
	return (
		<div>
			{console.log(vehicleList)}
			<h1 className="text-primary text-center">Parking app</h1>
			<Routes>
				<Route path="/" element={<CarData setVehicleList={setVehicleList} />} />
				<Route path="/garage" element={<Garage vehicleList={vehicleList} />} />
			</Routes>
		</div>
	);
}

export default App;
