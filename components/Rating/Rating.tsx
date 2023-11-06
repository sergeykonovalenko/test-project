import styled from 'styled-components';
import StarFilled from './star-filled.svg';
import StarEmpty from './star-empty.svg';
import { RatingProps } from '@/components/Rating/Rating.props';
import { ReactElement } from 'react';

const Parent = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.span`
  margin-left: 6px;
  color: var(--colors-warning--dark);
  font-size: 12px;
  line-height: 1.33333;
`;

const Rating = ({
  currentRating,
  showLabel,
  ...props
}: RatingProps): ReactElement => {
  const ratingArray = new Array(5).fill(<></>);

  return (
    <Parent {...props}>
      <List>
        {ratingArray.map((item, index) => (
          <Item key={index}>
            {index < currentRating ? (
              <StarFilled width={20} heigh={18} />
            ) : (
              <StarEmpty width={20} heigh={18} />
            )}
          </Item>
        ))}
      </List>
      {showLabel && (
        <Label>
          {currentRating}/{ratingArray.length}
        </Label>
      )}
    </Parent>
  );
};

export default Rating;
