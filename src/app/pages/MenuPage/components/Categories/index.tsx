import React, { useState } from 'react';
import { ColumnFlexWithPadding, Flexbox } from '../../../../typography/flex';
import styled from 'styled-components';
import { mainBlack, mainGrey } from '../../../../themes/colors';
import { Span } from 'app/typography/text';

const categories = [
  'салаты и закуски',
  'супы',
  'вторые блюда',
  'воки',
  'гарниры',
  'завтраки',
  'соусы',
];

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );

  return (
    <div>
      <CategoriesComponent spacing={'12px'}>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            isSelected={category === selectedCategory}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </CategoriesComponent>
    </div>
  );
}

const CategoriesComponent = styled(ColumnFlexWithPadding)`
  margin-right: 150px;
  width: 210px;
  position: sticky;
  top: 2rem;
  min-height: 2em;
`;

const Category = (props: {
  isSelected: boolean;
  category: string;
  onClick: () => void;
}) => {
  return (
    <Flexbox onClick={props.onClick}>
      <CategoryText
        color={props.isSelected ? mainBlack : mainGrey}
        isSelected={props.isSelected}
      >
        - {props.category}
      </CategoryText>
    </Flexbox>
  );
};

const CategoryText = styled(Span)<{ isSelected: boolean }>`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
`;
