// Causa vs Efeito
import { useEffect, useState } from "react";

interface UserDTO {
  name: string;
  github: string;
}

function getUserData() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        github: "https://github.com/josepholiveira",
      },
    },
  };
}

export function UserProfile() {
  const [isUserNotLoaded, setisUserNotLoaded] = useState(false);
  const [userData, setUserData] = useState<UserDTO>();

  useEffect(() => {
    function loadUser() {
      setisUserNotLoaded(true);

      const fetchUserResponse = getUserData();

      setUserData(fetchUserResponse.data.user);

      setisUserNotLoaded(false);
    }

    loadUser();
  }, [getUserData]);

  if (isUserNotLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  );
}
