
import Child from "./components/Child";
import "./App.css";

function App() {

  const users = [
    {
      id: 1,
      name: "Arun ",
      city: "Chennai",
      age: 23,
      email: "arun@gmail.com",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Priya",
      city: "Bangalore",
      age: 22,
      email: "priya@gmail.com",
      phone: "9876543211"
    },
    {
      id: 3,
      name: "Rahul",
      city: "Hyderabad",
      age: 24,
      email: "rahul@gmail.com",
      phone: "9876543212"
    },
    {
      id: 4,
      name: "Sneha",
      city: "Coimbatore",
      age: 21,
      email: "sneha@gmail.com",
      phone: "9876543213"
    },
    {
      id: 5,
      name: "Vijay",
      city: "Madurai",
      age: 25,
      email: "vijay@gmail.com",
      phone: "9876543214"
    }
  ];

  return (
    <div className="container">
      <h1>User Details</h1>

      <div className="user-container">
        {users.map((user) => (
          <Child key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
