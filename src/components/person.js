import React from 'react';

export default function Person({name, avatar, email, room, position}) {
  return (
    <div className="avatar" style={{ marginBottom: '1rem' }}>
      <img className="avatar__photo avatar__photo--xl" src={avatar} style={{ objectFit: 'cover' }} />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        <span className="avatar__subtitle"><a href={"mailto:" + email}>{email}</a>, ауд. {room}</span>
        <small className="avatar__subtitle">{position}</small>
      </div>
    </div>
  );
}