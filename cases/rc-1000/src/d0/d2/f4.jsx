
  import Logo from '@/assets/logo.svg'
  import MessageBox from '@/components/MessageBox'
  import { GlobalContext } from '@/context'
  import defaultLocale from '@/locale'
  import { generatePermission } from '@/routes'
  import { GlobalState } from '@/store'
  import useLocale from '@/utils/useLocale'
  import useStorage from '@/utils/useStorage'
  import { Avatar, Button, Divider, Dropdown, Input, Menu, Message, Select, Tooltip } from '@arco-design/web-react'
  import {
    IconDashboard,
    IconExperiment,
    IconInteraction,
    IconLanguage,
    IconMoonFill,
    IconNotification,
    IconPoweroff,
    IconSettings,
    IconSunFill,
    IconTag,
    IconUser,
  } from '@arco-design/web-react/icon'
  import React, { useContext, useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import Component__0 from './d4/f0.jsx'
import Component__1 from './d4/f1.jsx'
import Component__2 from './d4/f2.jsx'
import Component__3 from './d4/f3.jsx'
import Component__4 from './d4/f4.jsx'
import Component__5 from './d4/f5.jsx'
import Component__6 from './d4/f6.jsx'
import Component__7 from './d4/f7.jsx'
import Component__8 from './d4/f8.jsx'
  function Navbar({ show }) {
    const t = useLocale()
    const userInfo = useSelector((state) => state.userInfo)
    const dispatch = useDispatch()
  
    const [_, setUserStatus] = useStorage('userStatus')
    const [role, setRole] = useStorage('userRole', 'admin')
  
    const { setLang, lang, theme, setTheme } = useContext(GlobalContext)
  
    function logout() {
      setUserStatus('logout')
      window.location.href = '/login'
    }
  
    function onMenuItemClick(key) {
      if (key === 'logout') {
        logout()
      } else {
      }
    }
  
    useEffect(() => {
      dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: {
            ...userInfo,
            permissions: generatePermission(role),
          },
        },
      })
    }, [role])
  
    if (!show) {
      return (
        <div className={styles['fixed-settings']}>
        </div>
      )
    }
  
    const handleChangeRole = () => {
      const newRole = role === 'admin' ? 'user' : 'admin'
      setRole(newRole)
    }
  
    const droplist = (
      <Menu onClickMenuItem={onMenuItemClick}>
        <Menu.SubMenu
          key="role"
          title={
            <>
              <IconUser className={styles['dropdown-icon']} />
              <span className={styles['user-role']}>
                {role === 'admin' ? t['menu.user.role.admin'] : t['menu.user.role.user']}
              </span>
            </>
          }
        >
          <Menu.Item onClick={handleChangeRole} key="switch role">
            <IconTag className={styles['dropdown-icon']} />
            {t['menu.user.switchRoles']}
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="setting">
          <IconSettings className={styles['dropdown-icon']} />
          {t['menu.user.setting']}
        </Menu.Item>
        <Menu.SubMenu
          key="more"
          title={
            <div style={{ width: 80 }}>
              <IconExperiment className={styles['dropdown-icon']} />
              {t['message.seeMore']}
            </div>
          }
        >
          <Menu.Item key="workplace">
            <IconDashboard className={styles['dropdown-icon']} />
            {t['menu.dashboard.workplace']}
          </Menu.Item>
          <Menu.Item key="card list">
            <IconInteraction className={styles['dropdown-icon']} />
            {t['menu.list.cardList']}
          </Menu.Item>
        </Menu.SubMenu>
  
        <Divider style={{ margin: '4px 0' }} />
        <Menu.Item key="logout">
          <IconPoweroff className={styles['dropdown-icon']} />
          {t['navbar.logout']}
        </Menu.Item>
      </Menu>
    )
  
    return (
      <div className={styles.navbar}>
        <Component__0/>
<Component__1/>
<Component__2/>
<Component__3/>
<Component__4/>
<Component__5/>
<Component__6/>
<Component__7/>
<Component__8/>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Logo />
            {/* <Logo /> todo svgr implementation */}
            {/* <img src={Logo as any as string} /> */}
            <div className={styles['logo-name']}>Arco Pro</div>
          </div>
        </div>
        <ul className={styles.right}>
          <li>
            <Input.Search className={styles.round} placeholder={t['navbar.search.placeholder']} />
          </li>
          <li>
            <Select
              triggerElement={<IconButton icon={<IconLanguage />} />}
              options={[
                { label: '中文', value: 'zh-CN' },
                { label: 'English', value: 'en-US' },
              ]}
              value={lang}
              triggerProps={{
                autoAlignPopupWidth: false,
                autoAlignPopupMinWidth: true,
                position: 'br',
              }}
              trigger="hover"
              onChange={(value) => {
                setLang(value)
                const nextLang = defaultLocale[value]
              }}
            />
          </li>
          <li>
            <MessageBox>
              <IconButton icon={<IconNotification />} />
            </MessageBox>
          </li>
          <li>
            <Tooltip content={theme === 'light' ? t['settings.navbar.theme.toDark'] : t['settings.navbar.theme.toLight']}>
              <IconButton
                icon={theme !== 'dark' ? <IconMoonFill /> : <IconSunFill />}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
            </Tooltip>
          </li>
          {userInfo && (
            <li>
              <Dropdown droplist={droplist} position="br">
                <Avatar size={32} style={{ cursor: 'pointer' }}>
                  <img alt="avatar" src={userInfo.avatar} />
                </Avatar>
              </Dropdown>
            </li>
          )}
        </ul>
      </div>
    )
  }
  
  export default Navbar
  