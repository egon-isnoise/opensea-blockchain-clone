import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '3uzaqf88',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skJ9zxZdps3P1S6SRYgsmVF8wnfsIAjMMp0OucYC9fAR6oGO1W1NgaKKWGPlIuFeZKn3lXFj9oC0DOwjDVW3FNL1XVwgokI5q9G8YiQ2VnJy9JyexGc7x5v48D1LDLwi9Ze75eneGGaA2cVHzYnz8CPjaFzYZXOYfsGAHIoUiqYbMOMLZZeT',
    useCdn: false,
})