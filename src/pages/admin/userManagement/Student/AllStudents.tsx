import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQueryParam, TStudent } from "../../../../types";
import { useGetAllStudentsQuery } from "../../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TStudent,
  "fullName" | "email" | "gender" | "contactNo" | "id"
>;

const AllStudents = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);

  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    // TODO: have to fix the limit when student data will be huge
    { name: "limit", value: 2 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const metaData = studentData?.meta;

  //! reconstructing table data
  const data = studentData?.data?.map(
    ({ _id, fullName, id, email, gender, contactNo }) => ({
      key: _id,
      id,
      fullName,
      email,
      gender,
      contactNo,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
      filters: [
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Autumn",
          value: "Autumn",
        },
      ],
    },
    {
      title: "Roll",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Contact",
      dataIndex: "contactNo",
    },
    {
      title: "Actions",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/admin/student-data/${item?.key}`}><Button>Details</Button></Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };
  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default AllStudents;
