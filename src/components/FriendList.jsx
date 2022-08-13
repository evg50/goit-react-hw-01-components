import React from "react";
import PropTypes from 'prop-types';
import "../styeles/StatisticsList.css"
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
    
    return (
        <ul className="friend-list">
            {friends.map(friend=> (
                <li  className="item" key={friend.id}>
                    <FriendListItem 
                        avatar ={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />  
                </li>
            ))}
        
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
};
FriendList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
  };

export default FriendList;