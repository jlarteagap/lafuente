"use client";
import React, { useState } from "react";

import { Geolocation } from "@capacitor/geolocation";
import { Location } from "./components/Location";
import { Button, CircularProgress, Container, Typography, } from "@mui/material";
import { ErrorLocation } from "./components/ErrorLocation";

export default function Page() {
    const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState(null);

  const getLocation = async () => {
    try {
      const coor = await Geolocation.getCurrentPosition();
      setLoading(true)
      setLocation(coor as GeolocationPosition);
      setError(null);
      setLoading(false)
    } catch (error) {
      setError(error.message);
      setLocation(null);
    }
  };
  return (
    <Container>
      <Typography variant='h1'>Capacitor</Typography>
      <Button variant='contained' color='primary' onClick={getLocation} style={{ marginTop: '20px' }}>
        Get Location
      </Button>
        {loading && <CircularProgress />}
      {location && <Location location={location} />}
      {error && <ErrorLocation message={error} />}
    </Container>
  );
}
