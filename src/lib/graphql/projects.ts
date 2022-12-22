export const allProjects = `
query allProjects {
	projects(first: 10) {
		title
		slug
		visual {
			url
		}
	}
}`;

export const projectBySlug = `
query projectBySlug($slug: String!) {
	projects(where: { slug: $slug }) {
		title
		clients {
			title
		}
		visual {
			url
		}
		teamLeads {
			firstName
			prefix
			surname
		}
		students(first: 10) {
			firstName
			prefix
			surname
		}
		productOwners {
			firstName
			prefix
			surname
		}
		coaches {
			firstName
			prefix
			surname
		}
		studentwork(first: 20) {
			title
			sprint
      website
			students {
				firstName
				prefix
				surname
			}
      repository
      visual {
        url
      }
    }
  }
}
`;
