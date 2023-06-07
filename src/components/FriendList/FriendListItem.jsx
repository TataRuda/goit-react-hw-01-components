import PropTypes from 'prop-types';


export const FriendListItem = ({isOnline, avatar, name}) => {
    return (<li class="item">
    <span class="status" status={isOnline}></span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    
};