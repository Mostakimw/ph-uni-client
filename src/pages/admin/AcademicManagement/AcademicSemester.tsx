import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const academicSemester = useGetAllSemestersQuery(undefined);
  console.log(academicSemester);
  return <div>this is academic semester</div>;
};

export default AcademicSemester;
