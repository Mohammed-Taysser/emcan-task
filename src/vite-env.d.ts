/// <reference types="vite/client" />

interface Subject {
  id: number;
  label: string;
  url: string;
  image: string;
}

interface Course {
  id: number;
  title: string;
  instructor: {
    avatar: string;
    name: string;
  };
  amount: number;
  rating: number;
  price: number;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  body: string;
  date: string;
  star: number;
}

interface Slide {
  id: number;
  title: string;
  image: string;
  subtitle: string;
}

interface Instructor {
  id: number;
  name: string;
  job: string;
  about: string;
  avatar: string;
}
