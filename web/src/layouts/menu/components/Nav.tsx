import { Navbar, Stack } from '@mantine/core';
import { TbHome, TbLogout } from 'react-icons/tb';
import { RiHomeGearFill } from 'react-icons/ri';
import { FaTshirt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import NavIcon from './NavIcon';
import { menuVisibilityAtom } from '../../../atoms/visibility';
import { useSetRecoilState } from 'recoil';
import { GiTeleport } from 'react-icons/gi';
import { fetchNui } from '../../../utils/fetchNui';

const Nav: React.FC = () => {
  const setVisible = useSetRecoilState(menuVisibilityAtom);

  return (
    <Navbar
      width={{ base: 80 }}
      p="md"
      fixed={false}
      sx={(theme) => ({
        height: 768
      })}
    >
      <Navbar.Section grow>
        <Stack justify="center" spacing={5}>
          <NavIcon color="blue.4" tooltip="Home" Icon={TbHome} to="/" />
          <NavIcon color="blue.4" tooltip="World" Icon={BiWorld} to="/world" />
          <NavIcon color="blue.4" tooltip="Locations" Icon={GiTeleport} to="/locations" />
          <NavIcon color="blue.4" tooltip="Interior" Icon={RiHomeGearFill} to="/interior" />
          <NavIcon color="blue.4" tooltip="Ped" Icon={FaTshirt} to="/ped" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default Nav;
