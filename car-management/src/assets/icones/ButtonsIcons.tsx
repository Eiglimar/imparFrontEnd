import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export function TrashIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} style={{ fontSize: "32px", margin: "0px -10px -10px 0px" }}>
      <g transform="translate(-4 -2.5)">
        <path d="M4.5,9H17.141" transform="translate(0 -3.191)" fill="none" stroke="#db2525" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.332,5.809v9.832a1.4,1.4,0,0,1-1.4,1.4H8.9a1.4,1.4,0,0,1-1.4-1.4V5.809m2.107,0V4.4a1.4,1.4,0,0,1,1.4-1.4H13.82a1.4,1.4,0,0,1,1.4,1.4v1.4" transform="translate(-1.595)" fill="none" stroke="#db2525" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15,16.5v4.214" transform="translate(-5.584 -7.18)" fill="none" stroke="#db2525" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21,16.5v4.214" transform="translate(-8.775 -7.18)" fill="none" stroke="#db2525" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </SvgIcon>
  );
}

export function EditIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} style={{ fontSize: "32px", margin: "0px -10px -10px 0px" }}>
      <g transform="matrix(0.996, -0.087, 0.087, 0.996, -2.719, -1.231)">
        <path d="M12.232,3.767a1.741,1.741,0,1,1,2.462,2.462L6.385,14.538,3,15.461l.923-3.385Z" fill="none" stroke="#e76316" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </SvgIcon>
  );
}

export default { TrashIcon, EditIcon };
