import React from "react";
import Employee from "./components/Employee";
import API from "./utils/API"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      userImage: null,
      email: null,
      phone:null,
      age:null
    };
  }
  render() {
    const { firstName,lastName, userImage, email,phone,age } = this.state;
    return (
      <Employee firstName={firstName} lastName={lastName} userImage={userImage} email={email} phone={phone} age={age} />
    );

  };
  async componentDidMount() {
    // Load async data.
    let employeeData = await API.getEmployees();
        // Parse the results for ease of use.
    employeeData = employeeData.data.results[0];
    // Update state with new data and re-render our component.
    const firstName = employeeData.name.first ;
    const lastName = employeeData.name.last ;
    const userImage = employeeData.picture.medium;
    const phone = employeeData.phone;
    const age = employeeData.dob.age;
    const email = employeeData.email;
    this.setState({
      ...this.state, ...{
        firstName,
        lastName,
        userImage,
        email,
        age,
        phone
      }
    });
  }
}
export default App;