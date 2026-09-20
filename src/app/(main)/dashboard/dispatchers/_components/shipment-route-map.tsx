"use client";

import type { Shipment } from "./shipment-data";

type ShipmentRouteMapProps = {
  shipment: Shipment | null;
};

export function ShipmentRouteMap({ shipment }: ShipmentRouteMapProps) {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "right",
        width: "100%",
        height: "400px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          background: "none",
          width: "100%",
          height: "400px",
        }}
      >
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&saddr=korattur&daddr=vadapalani&t=&z=12&ie=UTF8&iwloc=B&output=embed"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}
