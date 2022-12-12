export interface Joke {
    imageUrl?: string
    category: string
    type: 'single' | 'twopart'
    joke?: string
    setup?: string
    delivery?: string
    flags: {
        nsfw: boolean
        religious: boolean
        political: boolean
        racist: boolean
        sexist: boolean
    },
    id: number,
    error: boolean
}

export interface Jokes extends Array<Joke> {}
