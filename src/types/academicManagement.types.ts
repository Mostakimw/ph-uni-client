export type TAcademicSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademicFaculty = {
  name: string;
};

export type TAcademicDepartment = {
  _id: string;
  name: string;
  academicFaculty: AcademicFaculty;
  createdAt: string;
  updatedAt: string;
}

export type AcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};