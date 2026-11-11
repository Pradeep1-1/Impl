
function Child({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default Child;
