import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
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

  return (
    <Layout style={{height: "100vh"}}>
      <Sidebar/>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
