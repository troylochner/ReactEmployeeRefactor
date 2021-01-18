import React from "react";

class Employee extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      userImage,
      email,
      phone,
      age
    } = this.props;
    const employeeData = (
      <div>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{age}</td>
        <td><img src={userImage}></img></td>
      </div>
    );
    return (
      <tr>{employeeData}</tr>
    );
  }
}

export default Employee;