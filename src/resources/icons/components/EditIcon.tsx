export const EditIcon = ({
  color = "rgb(75 85 99)",
  width = "30",
  height = "30",
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-edit'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke={color}
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
      <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
      <line x1='16' y1='5' x2='19' y2='8' />
    </svg>
  );
};
