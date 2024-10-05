import { DiscussionEmbed } from 'disqus-react';

interface DiscussionProps {
  path: string;
  title: string;
}

export default function Discussion(props: DiscussionProps) {
  const { path, title } = props;

  return (
    <DiscussionEmbed
      shortname="mariorodrigues10"
      config={{
        url: `https://mariorodrigues10.github.io/${path}`,
        title: title,
      }}
    />
  );
}
