import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({isOnline, avatar, name}) => {
  return (<li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span> 
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    
};