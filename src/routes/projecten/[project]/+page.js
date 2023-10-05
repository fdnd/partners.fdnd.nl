import { projectBySlug } from '$lib/graphql/projects';
import { gql } from '$lib/graphql';

export const load = async ({ params, fetch }) => {
	const req = await fetch(import.meta.env.VITE_HYGRAPH_URL, { ...gql(projectBySlug, { slug: params.project }) });
	const data = await req.json();

	return { project: { ...data.data.projects[0] } };
};
