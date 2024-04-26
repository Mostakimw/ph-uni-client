import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;

// const items = [
//   {
//     key: "Dashboard",
//     label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create-student",
//         label: <NavLink to='/admin/create-student'>Create student</NavLink>,
//       },
//       {
//         key: "Create-faculty",
//         label: <NavLink to='/admin/create-faculty'>Create faculty</NavLink>,
//       },
//       {
//         key: "Create-admin",
//         label: <NavLink to='/admin/create-admin'>Create admin</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>Log Out</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
