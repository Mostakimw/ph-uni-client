import { Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam, TStudent } from "../../../../types";
import { useGetAllStudentsQuery } from "../../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<
  TStudent,
  "fullName" | "email" | "gender" | "contactNo"
>;

const AllStudents = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: studentData, isFetching } = useGetAllStudentsQuery(params);

  //! reconstructing table data
  const data = studentData?.data?.map(
    ({ _id, fullName, email, gender, contactNo }) => ({
      key: _id,
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
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
    />
  );
};

export default AllStudents;
