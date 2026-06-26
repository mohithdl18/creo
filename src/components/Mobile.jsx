"use client";

import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";

export default function Mobile() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Mobile Navbar */}
      <NavbarMobile />

      {/* Main Content */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-28 pb-12">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Mobile Experience
            <br />
            Coming Soon
          </h1>

          <p className="mt-6 text-sm leading-7 text-gray-400">
            We're crafting an immersive mobile experience for CREO.
            Until then, please visit our website on a desktop or laptop
            to experience the full interactive design.
          </p>
        </div>
      </section>
    </main>
  );
}