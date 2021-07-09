import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcJpg1x = src;
  const srcJpg2x = src.replace(".jpg", "@2x.jpg");
  const srcJpg3x = src.replace(".jpg", "@3x.jpg");

  const srcAvif1x = src;
  const srcAvif2x = src.replace(".jpg", "@2x.avif");
  const srcAvif3x = src.replace(".jpg", "@3x.avif");

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type='image/avif'
            srcSet={`${srcAvif1x} 1x, ${srcAvif2x} 2x, ${srcAvif3x} 3x`}
          ></source>
          <source
            type='image/jpg'
            srcSet={`${srcJpg1x} 1x, ${srcJpg2x} 2x, ${srcJpg3x} 3x`}
          ></source>

          <Image src={src} alt={tags.join(",")} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline-block;
  margin-right: 6px;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
