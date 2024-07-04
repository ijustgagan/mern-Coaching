// CourseHome.jsx
import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import EnrollForm from "../Enroll"; // Import the EnrollForm component
import { coursesCard } from "../../dummydata"; // Import coursesCard from your dummy data

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
      {/* Render EnrollForm with course details */}
      {coursesCard.length > 0 && <EnrollForm course={coursesCard[0]} />} {/* Example: Pass the first course */}
    </>
  );
};

export default CourseHome;
