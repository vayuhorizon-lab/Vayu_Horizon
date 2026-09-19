export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  span?: string; // e.g., 'col-span-2 row-span-2' for varied masonry layout
}

export const gallery: GalleryImage[] = [
  {
    id: "img1",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60",
    alt: "Mountain night sky",
    caption: "The beginning of the journey.",
    span: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: "img2",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60",
    alt: "Group looking at mountains",
    span: "col-span-1 row-span-1",
  },
  {
    id: "img3",
    url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&auto=format&fit=crop&q=60",
    alt: "Distant mountains",
    caption: "Beyond what we can see.",
    span: "col-span-1 row-span-2",
  },
  {
    id: "img4",
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop&q=60",
    alt: "Nature reflection",
    span: "col-span-1 row-span-1",
  },
  {
    id: "img5",
    url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=60",
    alt: "Dark forest with lights",
    caption: "Finding our way.",
    span: "col-span-1 row-span-1 sm:col-span-2",
  },
];
