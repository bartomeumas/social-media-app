const ProfileInformation = (props) => {
  // const {name, lastName, description, userImage, age} = props.userImage;

  return (
    <div className='flex justify-between h-40'>
      <div className='bg-white rounded-xl h-40 w-full shadow-lg'>Image</div>
      <div className='w-full text-left pl-4'>
        <span className='text-lg'>
          <b>Bartomeu Mas</b> | 23
        </span>
        <p className='overflow-y-scroll h-32'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default ProfileInformation;
