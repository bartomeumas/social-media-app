import Link from "next/link";

import IconContainer from "@/components/IconContainer";
import { HomeIcon } from "@/resources/icons/components/HomeIcon";
import { AvatarIcon } from "@/resources/icons/components/AvatarIcon";
import { Button } from "@/components/Button";

const MobileNavBar = () => (
  <nav
    className='fixed bottom-0 w-full bg-white px-10 py-3 flex justify-around items-center'
    style={{ boxShadow: "0px 0 10px rgba(0, 0, 0, 0.4)" }}>
    <Link href='/'>
      <IconContainer
        icon={<HomeIcon />}
        isClickable
        onClick={() => {
          console.log("?");
        }}
      />
    </Link>
    <Link href='/'>
      <Button
        type='add'
        onClick={() => {
          console.log("?");
        }}></Button>
    </Link>
    <Link href='/'>
      <IconContainer
        icon={<AvatarIcon />}
        isClickable
        onClick={() => {
          console.log("?");
        }}
      />
    </Link>
  </nav>
);

export default MobileNavBar;
