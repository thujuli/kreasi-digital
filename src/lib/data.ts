import axios from "axios";
import { resolveAxiosError, resolveError } from "./error";
import { API_RANDOM_USER } from "@/utils/helper";
import { Person } from "@/utils/types/ourTeam";
import { getSuccessProjects } from "./contentful";

export const fetchOurTeam = async () => {
  const initialPerson: Person = {
    firstName: "",
    lastName: "",
    picture: "",
  };

  try {
    const ourTeam: Person[] = [];
    for (let index = 0; index < 3; index++) {
      const person: Person = { ...initialPerson };
      const response = await axios.get(API_RANDOM_USER);

      person.firstName = response.data.results[0].name.first;
      person.lastName = response.data.results[0].name.last;
      person.picture = response.data.results[0].picture.large;
      ourTeam.push(person);
    }
    return ourTeam;
  } catch (error) {
    console.error(resolveAxiosError(error));
  }
};

export const fetchProjects = async () => {
  try {
    const response = await getSuccessProjects();
    const data = response.map((project: any) => ({
      title: project.title,
      description: project.description,
      job: project.job,
      projectLink: project.projectLink,
      imageUrl: "https:" + project.image?.fields?.file?.url,
    }));
    return data;
  } catch (error) {
    console.error(resolveError(error));
  }
};
