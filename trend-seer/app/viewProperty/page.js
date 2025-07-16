// app/viewProperty/page.js
import { Suspense } from 'react';
import ViewPropertyClient from './ViewPropertyClient';

export default function ViewPropertyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewPropertyClient />
    </Suspense>
  );
}
