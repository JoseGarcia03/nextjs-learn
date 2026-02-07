import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'This is the pricing page of our Next.js application.',
};

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-7xl">Pricing Page</span>
    </main>
  )
}