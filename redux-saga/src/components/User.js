import React from "react";
import { useSelector } from "react-redux";

function User() {
    const users = useSelector(state => state.users);
    console.log(users);
    const deleteUsers = (id) => ({
        type: 'DELETE_USER',
        payload: id,
    });

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td><button type="button" onClick={() => deleteUsers(user.id)}>delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;