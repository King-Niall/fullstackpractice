import React from 'react';

export default function Post({
  fakeLetter = "A",
  author = "Jeremy2",
  title = "Title",
  content = "Ladies and gentlemen, boys and girls welcome to jermacraft..."
}) {
  return (
    <div className="post">
      <div className="user">
        <div className="fakeimg">{fakeLetter}</div>
        <h3 className="author">{author}</h3>
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
