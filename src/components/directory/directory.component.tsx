import React from 'react';

import { DirectoryContainer } from './directory.styles';

import DirectoryItem from '../directory-item/directory-item.component';

import CATEGORIES_DATA from '../../categories-data.json';
import { CategoryHome } from '../../store/types/categoryTypes';

const Directory: React.FC = () => {
  const categories: CategoryHome[] = CATEGORIES_DATA;

  return (
    <DirectoryContainer>
      {categories.map(({
        id, title, imageUrl, route,
      }) => (
        <DirectoryItem
          key={id}
          id={id}
          title={title}
          imageUrl={imageUrl}
          route={route}
        />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
