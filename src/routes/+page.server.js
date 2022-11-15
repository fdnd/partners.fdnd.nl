import { client } from "$lib/utils/client"

const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
}

export const load = async () => {
	const queryProjects = `
    query Projects {
        search(first: 100, type: REPOSITORY, query: "topic:project org:fdnd-agency") {
          pageInfo {
            hasNextPage
            endCursor
            }
          repos: edges {
            repo: node {
              ... on Repository {
                name
                description
                url
              }
            }
          }
        }
    }
    `
    const data  = await client({ query: queryProjects, variables: { slug: '' }, fetch: fetch, endpoint: import.meta.env.VITE_GITHUB_ENDPOINT, headers: headersGitHub })
    
    const repos = data.search.repos.map(({repo}) => {
        return {
            name:repo.name,
            description:repo.description,
            url:repo.url
        }
    })

    return {repos}
}

