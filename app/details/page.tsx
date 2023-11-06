import { Metadata } from 'next';
import MealReviewPage from '@/components/MealReviewPage/MealReviewPage';

export const metadata: Metadata = {
  title: 'Details',
};

export default function Details() {
  return (
    <main>
      <MealReviewPage />
    </main>
  );
}
