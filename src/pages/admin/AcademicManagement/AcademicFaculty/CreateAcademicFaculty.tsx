import { Button, Col, Flex } from "antd";
import PHForm from "../../../../components/form/PHForm";
import PHSelect from "../../../../components/form/PHSelect";
import { facultyOptions } from "../../../../constants/faculty";
import { useAddAcademicFacultyMutation } from "../../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { TResponse } from "../../../../types";
import { TAcademicFaculty } from "../../../../types/academicManagement.types";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation(undefined);
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating");
    try {
      const res = (await addAcademicFaculty(
        data
      )) as TResponse<TAcademicFaculty>;
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Faculty Created", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="name"
            label="Faculty Name"
            options={facultyOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
