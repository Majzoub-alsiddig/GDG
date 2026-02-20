"use client";
import React from "react";
import "./style.css";

type Course = {
  name: string;
  description: string;
  link: string;
  cover: string;
};

type coursesProps = { courses: Course[]; };

const Rendercourses: React.FC<coursesProps> = ({ courses }) => {
  return (
    <div className="courses-container">
      {courses.map((course, index) => (
        <a
          key={index}
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="course-card"
        >
          <img src={course.cover} alt={course.name} className="course-img" />
          <div className="course-info">
            <h3 className="course-name font-bold">{course.name}</h3>
            <p className="course-description line-clamp-2">{course.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Rendercourses;
