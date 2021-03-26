import React from "react";
import UserItem from "../components/UserItem";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ui",
      name: "Anna Groofy",
      image:
        "https://images.unsplash.com/photo-1616683693445-77022fe0b528?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
