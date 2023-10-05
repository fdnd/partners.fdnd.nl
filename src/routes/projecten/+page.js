import { gql } from '$lib/graphql';
import { allProjects } from '$lib/graphql/projects';


export const load = async ({ fetch }) => {
	const req = await fetch(import.meta.env.VITE_HYGRAPH_URL, { ...gql(allProjects) });
	const data = await req.json();

	return { ...data.data };
};