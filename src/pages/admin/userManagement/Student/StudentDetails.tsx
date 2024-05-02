import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>This is StudentDetails {params.id}</h1>
    </div>
  );
};

export default StudentDetails;
