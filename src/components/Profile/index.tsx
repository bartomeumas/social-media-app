import ProfileMain from "./ProfileMain";
import ProfileInformation from "./ProfileInformation";

//This should page should be rendered differently depending on whethere you're viewing
// your profile or someone else's

export const Profile = () => {
  return (
    <div className='text-center w-full h-full container'>
      <ProfileInformation />
      <ProfileMain />
    </div>
  );
};
