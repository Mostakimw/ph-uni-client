import { useGetAllAcademicFacultyQuery } from "../../../../redux/features/admin/academicManagement.api";

const AcademicFaculty = () => {
  const { data: academicFaculty } = useGetAllAcademicFacultyQuery(undefined);
  console.log(academicFaculty);
  return (
    <div>
      <h1>This is AcademicFaculty component</h1>
    </div>
  );
};

export default AcademicFaculty;
