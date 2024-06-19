import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate()

    const sideBarItems = [
        {
            name: 'Download1',
            link: 'download-1',
        },
        {
            name: 'Download2',
            link: 'download-2',
        },
        {
            name: 'Upload1',
            link: 'upload-1',
        },
        {
            name: 'upload2',
            link: 'upload-2',
        },
    ]
    return (
        <>
            <ul>
                {sideBarItems.map((menu, index) => {
                    return (
                        <li key={index} onClick={() => navigate(menu.link)}>
                            {menu.name}
                        </li>
                    )
                })}
            </ul>
            <Outlet />
        </>

    )
}

export default Layout