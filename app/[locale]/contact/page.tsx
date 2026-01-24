"use client"
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import("@/components/pages/Contact/Contact"), {
  ssr: false,
});

export default function ContactUsPage() {
  return <Contact />;
}