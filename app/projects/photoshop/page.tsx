// app/projects/photoshop/page.tsx
import Link from 'next/link';

export default function PhotoshopPage() {
  const subCategories = [
    { title: "YouTube Thumbnails", href: "/projects/photoshop/yt-thumbnail" },
    { title: "Flyers & Posters", href: "/projects/photoshop/flyers-posters" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Photoshop Portfolio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subCategories.map((cat) => (
          <Link key={cat.title} href={cat.href} className="block p-6 border rounded-lg hover:shadow-lg transition duration-300 bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{cat.title}</h2>
            <span className="mt-4 text-indigo-500 hover:text-indigo-700 block font-medium">View Cases →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}