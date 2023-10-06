import L, { Icon } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {

    const instance = L.Routing.control({
        waypoints: [
            L.latLng(41.34435917891031, 21.552085693693254),
            L.latLng(41.03996527969188, 21.35225190995838)
        ],
        // ...otherOptions
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;