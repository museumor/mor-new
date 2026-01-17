export interface Exhibit {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string; 
  color: string;
}

export const exhibits: Exhibit[] = [
  {
    id: "1",
    title: "Immersive Sculpture",
    artist: "Dani Bittman",
    description: "VR artist and tool developer known for Tilt Brush and blocks work.",
    imageUrl: "/placeholders/1.jpg", 
    color: "bg-fuchsia-900",
  },
  {
    id: "2",
    title: "Animated Worlds",
    artist: "Nick Ladd",
    description: "3D animator and Quill artist creating vibrant, living scenes.",
    imageUrl: "/placeholders/2.jpg",
    color: "bg-blue-900",
  },
  {
    id: "3",
    title: "Surreal Narratives",
    artist: "Ana Duncan",
    description: "Illustrator and VR artist crafting stylized, colorful environments.",
    imageUrl: "/placeholders/3.jpg",
    color: "bg-purple-900",
  },
  {
    id: "4",
    title: "Future Stories",
    artist: "Sutu",
    description: "Digital artist exploring the intersection of art and technology.",
    imageUrl: "/placeholders/4.jpg",
    color: "bg-indigo-900",
  },
  {
    id: "5",
    title: "Abstract Forms",
    artist: "Naam",
    description: "VR sculptor creating intricate, organic structures.",
    imageUrl: "/placeholders/5.jpg",
    color: "bg-violet-900",
  },
  {
    id: "6",
    title: "Character Design",
    artist: "Liz Edwards",
    description: "3D character artist and VR sculptor.",
    imageUrl: "/placeholders/6.jpg",
    color: "bg-pink-900",
  },
  {
    id: "7",
    title: "Procedural beauty",
    artist: "Kevin Mack",
    description: "Pioneer of abstract, procedural VR experiences.",
    imageUrl: "/placeholders/7.jpg",
    color: "bg-cyan-900",
  },
  {
    id: "8",
    title: "Cosmic Visions",
    artist: "Isaac Cohen",
    description: "Experience designer focused on emotional connection in VR.",
    imageUrl: "/placeholders/8.jpg",
    color: "bg-teal-900",
  }
];