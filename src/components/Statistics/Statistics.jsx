import PropTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

export const Statistics = ({
  value,
  options,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <List>
      {options.map(elem => (
        <Item key={elem + 'key'}>
          {elem}: <span>
            {value[elem]}
          </span>
        </Item>
      ))}
      <Item>
        Total: <span>{totalFeedback()}</span>
      </Item>
      <Item>
        Positive feedback: {positivePercentage()}%
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.shape(PropTypes.number).isRequired,
  totalFeedback: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
