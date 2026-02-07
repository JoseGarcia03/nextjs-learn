import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'This is the contact page of our Next.js application.',
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-7xl">Contact Page</span>
    </main>
  )
}