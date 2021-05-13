import React, { RefObject, useEffect, useState } from 'react';
import { ColumnFlexWithPadding, Flexbox } from '../../../../typography/flex';
import styled from 'styled-components';
import { mainBlack, mainGrey } from '../../../../themes/colors';
import { Span } from 'app/typography/text';
import { useSelector } from 'react-redux';
import { selectDishCategories } from '../../../../../store/profile/selectors';

export function CategoriesList(props: { refs: RefObject<HTMLDivElement>[] }) {
  const categories = useSelector(selectDishCategories);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );

  useEffect(() => {
    if (props.refs[categories.indexOf(selectedCategory)])
      props.refs[
        categories.indexOf(selectedCategory)
      ].current?.scrollIntoView();
  }, [selectedCategory]);

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
