export const prerender = false

export const actions = {
	default: async ({request, url}) => {
        const data = await request.formData()

        const name = data.get("name")

        console.log(data)

        return { success: true, name }
	}
};
