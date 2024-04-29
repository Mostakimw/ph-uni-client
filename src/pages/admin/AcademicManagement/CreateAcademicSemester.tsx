import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const semestersName = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const name = semestersName[Number(data.name) - 1].label;
    const createSemData = {
      name,
      code: data.name,
    };
    console.log(createSemData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          {/* <PHInput name="name" type="text" label="Semester Name:"></PHInput>
          <PHInput name="year" type="text" label="Year:"></PHInput> */}
          <PHSelect name="name" label="Name" options={semestersName} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
