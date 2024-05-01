import { Col, Flex, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../../redux/features/admin/academicManagement.api";

type TAcademicFaculty = {
  _id: string;
  name: string;
};

const AcademicFaculty = () => {
  const { data: academicFaculty, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);

  const tableData = academicFaculty?.data?.map(
    ({ _id, name }: TAcademicFaculty) => ({
      key: _id,
      name,
    })
  );

  const columns: TableColumnsType<TAcademicFaculty> = [
    {
      title: "Faculty Name",
      dataIndex: "name",
    },
  ];

  const onChange: TableProps<TAcademicFaculty>["onChange"] = () => {
    console.log("onChange");
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <Table
          loading={isFetching}
          dataSource={tableData}
          columns={columns}
          onChange={onChange}
        ></Table>
      </Col>
    </Flex>
  );
};

export default AcademicFaculty;
