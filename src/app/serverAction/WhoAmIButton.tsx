"use client";
import { useState } from "react";

export default function WhoAmIButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();
  return (
    <>
      <button
        onClick={async () => {
          setName(await whoAmIAction());
        }}
      >
        Who Am I?
      </button>
      {name ? <>You are {name}</> : null}
    </>
  );
}
