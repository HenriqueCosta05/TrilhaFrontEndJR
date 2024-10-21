"use client";

import { Progress } from '@/components/ui/progress';
import React from 'react'

export default function Loading() {
 const [progress, setProgress] = React.useState(13);

 React.useEffect(() => {
   const timer = setTimeout(() => setProgress(99), 2000);
   return () => clearTimeout(timer);
 }, []);

 return <Progress value={progress} className="w-[60%]" />;
}
