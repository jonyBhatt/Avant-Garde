import ProfilePage from "../../_components/mentor/profile/profile-page";

const Profile = () => {
  return (
    <div className="py-6 flex flex-col gap-4">
      <h2 className="font-semibold font-rubik text-3xl pb-1 leading-4 tracking-wide">
        Profile
      </h2>
      <ProfilePage />
    </div>
  );
};
export default Profile;
