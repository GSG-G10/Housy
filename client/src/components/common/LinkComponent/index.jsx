import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const LinkComponent = ({
  to, styleList, name,
}) => (
  <div>
    <Link to={to} style={{ color: '#797B7D', textDecoration: 'none' }}>
      <ListItem button style={styleList}>
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  </div>
);
LinkComponent.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  styleList: PropTypes.objectOf.isRequired,
};

export default LinkComponent;
