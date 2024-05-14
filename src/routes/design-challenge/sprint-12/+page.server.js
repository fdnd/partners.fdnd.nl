import { fail } from "@sveltejs/kit"

export const prerender = false

export const actions = {
	default: async ({request, url}) => {
        const data = await request.formData()

        const name = data.get("name")
        const email = data.get("email")
        const challenge = data.get("challenge")

        if (name.length < 2) return fail(400, {
            error:true,
            message: "Naam moet minstens 2 karaters bevatten",
            name, 
            email,
            challenge
        })

        return { success: true, name, email, challenge }
	}
};