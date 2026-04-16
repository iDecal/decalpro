import { defineCollection, z } from 'astro:content';

const khuVucCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    districtName: z.string(),
    image: z.string().default('/images/thi-cong-1.jpg'),
  }),
});

export const collections = {
  'khu-vuc': khuVucCollection,
};
