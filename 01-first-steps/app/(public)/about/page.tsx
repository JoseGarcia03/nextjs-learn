import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'This is the about page of our Next.js application.',
};

export default function About() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">About Page</span>
    </main>
  )
}