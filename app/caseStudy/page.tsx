'use client'
import dynamic from 'next/dynamic';
import React from 'react';

const CaseStudyPage = dynamic(
  () => import('@/pages/CaseStudyPage/CaseStudyPage'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function CaseStudy() {   
  return <CaseStudyPage />;
}