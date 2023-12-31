import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b-2">
      <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="Profile Picture of author" />
    </div>
  );
};

export default Header;
