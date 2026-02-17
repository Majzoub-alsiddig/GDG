"use client";
import React from "react";
import "./style.css";

type Member = {
  img: string;
  name: string;
  season: string;
  team: string;
  media: string;
};

type MembersProps = { members: Member[]; };

const RenderMembers: React.FC<MembersProps> = ({ members }) => {
  return (
    <div className="members-container">
      {members.map((member, index) => (
        <a
          key={index}
          href={member.media}
          target="_blank"
          rel="noopener noreferrer"
          className="member-card"
        >
          <img src={member.img} alt={member.name} className="member-img" />
          <div className="member-info">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-team">{member.team}</p>
            <p className="member-season">{member.season}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RenderMembers;
