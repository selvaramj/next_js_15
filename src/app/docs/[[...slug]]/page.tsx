import React from "react";

const DocsPage = async (props: { params: Promise<{ slug: string[] }> }) => {
  const slugs = (await props.params).slug;
  return (
    <div>
      <p>Docs page</p>
      <ul>
        {slugs?.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocsPage;
