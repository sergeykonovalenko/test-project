import { create } from 'zustand';
import { IComponents } from '@/interfaces/components.interfaces';

export const useComponents = create<IComponents>()((set) => ({
  components: [
    {
      title: 'Morrocan Chicken',
      image: '/img/base/component-1.png',
      rating: 3,
    },
    {
      title: 'Couscous Pilaf',
      image: '/img/base/component-2.png',
      rating: 3,
    },
    {
      title: 'Turkey Meatloaf',
      image: '/img/base/component-3.png',
      rating: 3,
    },
  ],
}));
