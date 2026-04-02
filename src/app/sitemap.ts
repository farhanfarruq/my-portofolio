import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://farhanfarruq.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Jika nanti Anda punya halaman lain seperti /projects atau /blog, 
    // Anda bisa menambahkannya di bawah sini. Contoh:
    // {
    //   url: 'https://farhanfarruq.vercel.app/projects',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}