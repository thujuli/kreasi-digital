import { createClient } from "contentful";

const client = createClient({
  space: "iv13a4imlk0w",
  accessToken: "_OXWvPdMIlBXe9xzWYYzkPrzkqATebbAq1djNhjiQq8",
});

const getEntriesByType = async (type: string) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getSuccessProjects = async () => {
  const response = await getEntriesByType("successProjects");
  return response.map((project) => project.fields);
};
