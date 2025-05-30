import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

const NETLIFY_API = 'https://api.netlify.com/api/v1/sites'
const TOKEN = env.NETLIFY_ACCESS_TOKEN

export async function load() {
    if (!TOKEN) {
        throw error(500, 'Netlify API token is missing.')
    }

    try {
        const response = await fetch(NETLIFY_API, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        })

        if (!response.ok) {
            throw error(response.status, 'Failed to fetch site data')
        }

        const sites = await response.json()

        const siteData = sites
          .filter(site => site.name.includes('agency') && site.screenshot_url != null)
          .map(site => {
            return {
              name: formatName(site.name),
              live_url: site.url,
              github_url: site.build_settings.repo_url || 'No GitHub repo linked',
              screenshot_url: site.screenshot_url
            }
          })

        return { sites: siteData }
    } catch (err) {
        throw error(500, `Error fetching Netlify data: ${err.message}`)
    }
}

function formatName (siteName) {
  if(!siteName) return undefined

  return siteName
            .replace(/-/g, " ")
            .replace(/ agency/g, "")
}