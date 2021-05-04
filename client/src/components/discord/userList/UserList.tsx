import React from "react";
import "./userList.scss";

const UserList: React.FC = () => {
  return (
    <section className="user-list">
        <span className='user-list__text'  >Disponible -1</span>
        <UserRow/>
        <span className='user-list__text'  >offline -18</span>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
        <UserRow/>
    </section>
  );
};

export default UserList;



// componente de usuario
function UserRow () {
  return (
    <div className='user-comp' >
      <img src="assets/avatar2.jpg" alt="avatar2" />
      <strong> Marianella </strong>
    </div>
  );
};
