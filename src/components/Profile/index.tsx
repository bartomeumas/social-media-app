import ProfileMain from "./ProfileMain";
import ProfileInformation from "./ProfileInformation";

export const Profile = ({}) => {
  return (
    <div className='text-center w-full h-full container'>
      <ProfileInformation />
      <ProfileMain />
    </div>
  );
};
