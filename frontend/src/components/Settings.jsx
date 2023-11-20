import "./Settings.css";
function Settings() {
  return (
    <>
      <h1 className="align-center">Settings</h1>
      <div className="settings">
        <input placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <div className="setting-buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Settings;
