import React from 'react';

export default function Bio() {
  const author = 'Mário Rodrigues';
  const social = {
    twitter: 'mariowhilecode',
    github: 'MárioRodrigus10'
  };
  return (
    <div
      style={{
        display: `flex`,
      }}
      itemProp="author"
      itemScope
      itemType="https://schema.org/Person"
    >
      <img
        src={`https://github.com/${social.github}.png?size=50`}
        alt={author}
        itemProp="image"
        style={{
          marginBottom: 0,
          minWidth: 50,
          height: 50,
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong itemProp="name">{author}</strong>
        <br />
        Software Engineering Student at UMinho
        {` `}
        <a href={`https://x.com/${social.twitter}`} itemProp="url">
          Follow me on X
        </a>
      </p>
    </div>
  );
}
