import { fail } from "@sveltejs/kit"

export const prerender = false
const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cln01zo7o062401ugcoer8q5w/master'

export async function load({ url }) {
    const query = `query People {
        people {
          name
          email
          challenge
        }
      }
    `

    const people = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
            query: query                   
        })
    })

    const peopleData = await people.json()

    return { people: peopleData.data.people }
    
}
  
export const actions = {
	default: async ({ request }) => {
        const formData = await request.formData()
        const formFields = {
            name: formData.get("name"),
            email: formData.get("email"),
            challenge: formData.get("challenge")
        }

        if (formFields.name.length < 2) {
            return fail(400, {
                error: true,
                message: "Name must be at least 2 characters long",
                ...formFields
            })
        }

        await postFormData()

        return { success: true, ...formFields }

        async function postFormData() {
            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTU3MTY5ODMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xuMDF6bzdvMDYyNDAxdWdjb2VyOHE1dy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiNzQzMjBhNGItNDMyNi00NzFjLWE0NjYtZDBmMmM0NjEwOTU5IiwianRpIjoiY2xuMDIzeTU2MDYyaDAxdWpla2tuZTh1YSJ9.i8lyRDXnyk8A64J2pLHEoZL9E4P7maa6D6Ac4yLnUxbupXqtk-euNBXdHZfEgM0higAjY9pwXIlvv25grK66Fb_kmX0NYzZSl5RngGEKVsLOV7DkHCQ7fhtTLBecLFZ4eT9MEE41_G5CSXU0_pUV26qyNvycCPPua2ReZJ6mVYLNHI1OBbsiBzs4gVybDrNmso8aIsozDnThF1yJqVwNOTIiXseBqoaKxuU4PcxoDYQbp_z9Hlk7qIz1vACLV3rrm_lDxKZ8hv43E4SPWKKM2laBlRu3aprIvUjawGUFWepIAbrLFFepdWfvyRUkwPBpBNLsxNlZbDhMzrYCdRG-FK3pCg3qccXHGL05dxpZ1evUMG_4qrGzkSJr7EtFoblwSFSOZGmJGajZYyyn8G71F_u8bJ5zrN6F_RpnmuvPBOrG5EQrWeTYAPVfJTH4qTPjX_-vrWXE8GeUMnZMpmbI0BLfs0Y_egXigplQFyrmxTMSyl6wc0l_23E40npoIYxodN5WdJ550V6gvpMbFA-iu8v3F6F7nK21Z3f9jxBW4fRfEa2cpGl5UblxR1oERhvD4rvzn-OS-Cy7whhCPfZTNt8ovmaZINHld-ZAq6v_2lzv_D0FXdK6qs3RFEehIY-PrRz_uVzamWLEHC8_d1ADmmu-dlUrex8UU0eEKGX_CKc'
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }

            // createPerson
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    query: `
                        mutation CreatePerson($name: String!, $email: String!, $challenge: String!) {
                            createPerson(data: { name: $name, email: $email, challenge: $challenge }) {
                                id
                                name
                                email
                                challenge
                            }
                        }
                        
                    `,
                    variables: {
                        name: formFields.name,
                        email: formFields.email,
                        challenge: formFields.challenge,
                    }                    
                })
            })

            const person = await response.json()

            // Publish person
            const publish = await fetch(endpoint, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    query: `
                    mutation publishPerson($id: ID!) {
                        publishPerson(where: { id: $id }, to: PUBLISHED) {
                          id
                        }
                      }
                        
                    `,
                    variables: {
                        id:person.data.createPerson.id
                    }                    
                })
            })

            return person.data.createPerson
        }
    }
}
