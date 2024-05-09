export const prerender = false;

export const actions = {
	default: async ({request, url}) => {
                const data = await request.formData();

                console.log(data)
	}
};
