import { createClient } from "@/prismicio";
import React from "react";
import * as prismic from "@prismicio/client";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      {settings.data.site_title}
      <nav></nav>
    </header>
  );
};

export default Header;
