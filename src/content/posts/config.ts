// Importa las utilidades de `astro:content`
import { z, defineCollection } from "astro:content";

// Define un `type` y un `schema` para cada colección
const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        cover: image().refine((img) => img.width >= 600, {
            message: "Cover image must be at least 800 pixels wide!",
        }),
        coverAlt: z.string(),
        tags: z.array(z.string())
    })
});

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
    posts: postsCollection,
};