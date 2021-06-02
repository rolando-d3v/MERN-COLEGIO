import React from "react";
import "./userList.scss";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

// componente de usuario
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <div className="user-comp">
      <img src="assets/avatar2.jpg" alt="avatar2" />
      <strong> {nickname} </strong>
      {isBot && <span>Bot</span>  }
    </div>
  );
};

const UserList: React.FC = () => {
  return (
    <section className="user-list">
      <span className="user-list__text">Disponible -1</span>
      <UserRow nickname="Marianella" />
      <span className="user-list__text">offline -18</span>
      <UserRow nickname="Marianella" isBot />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella santos jimenez " isBot />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" isBot />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
      <UserRow nickname="Marianella" />
    </section>
  );
};

export default UserList;
