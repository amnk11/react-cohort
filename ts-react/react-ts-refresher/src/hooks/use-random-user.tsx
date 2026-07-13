import * as React from "react";

interface FreeApiRandomUserName {
  title: string;
  first: string;
  last: string;
}

interface FreeApiRandomUserStreet {
  number: number;
  name: string;
}

interface FreeApiRandomUserCoordinates {
  latitude: string;
  longitude: string;
}

interface FreeApiRandomUserTimezone {
  offset: string;
  description: string;
}

interface FreeApiRandomUserLocation {
  street: FreeApiRandomUserStreet;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: FreeApiRandomUserCoordinates;
  timezone: FreeApiRandomUserTimezone;
}

interface FreeApiRandomUserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface FreeApiRandomUserDateAge {
  date: string;
  age: number;
}

interface FreeApiRandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface FreeApiRandomUserData {
  gender: string;
  name: FreeApiRandomUserName;
  location: FreeApiRandomUserLocation;
  email: string;
  login: FreeApiRandomUserLogin;
  dob: FreeApiRandomUserDateAge;
  registered: FreeApiRandomUserDateAge;
  phone: string;
  cell: string;
  id: number;
  picture: FreeApiRandomUserPicture;
  nat: string;
}

interface FreeApiGetRandomUserResponse {
  statusCode: number;
  data: FreeApiRandomUserData;
  message: string;
  success: boolean;
}

export default function useRandomUser() {
  const [user, setUser] = React.useState<null | FreeApiRandomUserData>();
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [error, setError] = React.useState<null | string>(null);

  async function fetchRandomUser() {
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setError(null);

      const responseData =
        (await response.json()) as FreeApiGetRandomUserResponse;

      if (responseData.success && responseData.data) {
        setUser(responseData.data);
      }
    } catch (error) {
      console.error("Error in fetching the data", error.message);
      setError("Something went wrong");
    } finally {
      setIsFetching(false);
    }
  }

  return { user, fetchRandomUser, isFetching, error };
}
