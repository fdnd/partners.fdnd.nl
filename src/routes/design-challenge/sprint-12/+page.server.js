export const prerender = false

export const actions = {
	default: async ({request, url}) => {
        const data = await request.formData()

        const name = data.get("name")
        const email = data.get("email")
        const challenge = data.get("challenge")

        return { success: true, name, email, challenge }
	}
};