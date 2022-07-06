import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { mapStyles } from "./mapStyles";
import styles from "./Map.module.scss";

interface MapProps {
	lat: number;
	long: number;
	children?: React.ReactNode;
}

export const Map: React.FC<MapProps> = ({ lat, long, children }) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<google.maps.Map>();

	useEffect(() => {
		if (mapRef.current && !map) {
			setMap(
				new window.google.maps.Map(mapRef.current, {
					center: { lat: lat, lng: long },
					zoom: 16,
					styles: mapStyles,
				})
			);
		}
	}, [mapRef, map]);

	return (
		<>
			<div className={styles.map} ref={mapRef} />
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { map });
				}
			})}
		</>
	);
};

export const MyMarker: React.FC<google.maps.MarkerOptions> = (options) => {
	const [marker, setMarker] = useState<google.maps.Marker>();

	useEffect(() => {
		if (!marker) {
			setMarker(
				new google.maps.Marker({
					icon: {
						url: "/images/icon_map_marker.svg",
					},
				})
			);
		}

		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	useEffect(() => {
		if (marker) {
			marker.setOptions(options);
		}
	}, [marker, options]);

	return null;
};

const MapContainer: React.FC<MapProps> = ({ lat, long }) => {
	const render = (status: Status) => {
		return <h1>{status}</h1>;
	};

	return (
		<Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} render={render}>
			<Map lat={lat} long={long}>
				<MyMarker position={{ lat: lat, lng: long }} />
			</Map>
		</Wrapper>
	);
};

export default MapContainer;
