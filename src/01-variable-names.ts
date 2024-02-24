const userCategories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getUserAndCategory(
  request: { query: any },
  response: { status?: any }
) {
  const githubUsername = String(request.query.username);

  if (!githubUsername) {
    return response.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const getUserByUsername = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  if (response.status === 404) {
    return response.status(400).json({
      message: `User with username "${githubUsername}" not found`,
    });
  }

  const userDataResponseAsJson = await getUserByUsername.json();

  const sortedUserCategoriesByFollowers = userCategories.sort(
    (user1, user2) => user2.followers - user1.followers
  );

  const matchedUserCategory = sortedUserCategoriesByFollowers.find(
    (categoryCandidate) =>
      userDataResponseAsJson.followers > categoryCandidate.followers
  );

  const userInfoAddCategory = {
    getUserByUsername,
    category: matchedUserCategory?.title,
  };

  return userInfoAddCategory;
}

getUserAndCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
