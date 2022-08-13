import React from "react";
import PropTypes from 'prop-types';
import "../styeles/FriendList.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    
    return (
        <div className="friend-item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </div>
        
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
};

export default FriendListItem;