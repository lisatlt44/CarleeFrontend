import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import Sidebar from '../../components/molecules/Sidebar';
import { useAuth } from '../../contexts/authContext';

function Dashboard () {
  const { state: { isLoggedIn, user }, logout } = useAuth()

  return (
    <div className='flex'>
      <Sidebar />
      <div className='main-content'>
        {
        isLoggedIn
          ? (
            <Navbar>
              <NavbarContent as='div' justify='end'>
                <Dropdown placement='bottom-end'>
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as='button'
                      className='transition-transform'
                      color='primary'
                      name='Jason Hughes'
                      size='sm'
                      src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label='Profile Actions' variant='flat'>
                    <DropdownItem key='profile' className='h-14 gap-2'>
                      <p className='font-semibold'>Signed in as</p>
                      <p className='font-semibold'>{user.email}</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarContent>
            </Navbar>
              )
            : (
              <Navbar>
                <NavbarContent justify='end'>
                  <NavbarItem className='hidden lg:flex'>
                    <Link href='#'>Login</Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Button as={Link} color='primary' href='/authentication' variant='flat'>
                      Sign Up
                    </Button>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            )
        }
      </div>
    </div>
  )
  }

export default Dashboard
