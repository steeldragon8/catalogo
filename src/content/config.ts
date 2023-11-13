// Importa las utilidades de `astro:content`
import { z, defineCollection } from "astro:content";

// Define un `type` y un `schema` para cada colección
const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => 
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            author: z.string(),
            cover: image(),
            tags: z.array(z.string())
        })
});

const spreadersCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            swl: z.string(),
            wt: z.string(),
            image: image()
        })
});

const liftingSpreadersCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            swl: z.string(),
            wt: z.string(),
            lgth: z.string(),
            image: image()
        })
});

const liftingBarsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            swl: z.string(),
            wt: z.string(),
            lgth: z.string(),
            image: image()
        })
});

const liftingManoeuvresCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            swl: z.string(),
            wt: z.string(),
            image: image()
        })
});

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
    posts: postsCollection,
    spreaders: spreadersCollection,
    liftingSpreaders: liftingSpreadersCollection,
    liftingBars: liftingBarsCollection,
    liftingManoeuvres: liftingManoeuvresCollection
};