import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authorSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  org: z.string().optional(),
  handle: z.string().optional(),
  url: z.string().optional(),
  links: z.array(z.object({
    label: z.string(),
    url: z.string(),
  })).optional(),
  avatar: z.string().optional(),
});

export const collections = {};
