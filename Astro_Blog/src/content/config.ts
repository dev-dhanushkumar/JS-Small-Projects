import {defineCollection, z} from "astro:content";

const postCollection = defineCollection ({
    schema: ({image}) => z.object ({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    })
})

export const collection  = {
    posts: postCollection,
}