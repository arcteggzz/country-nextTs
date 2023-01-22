import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode;
}

function layout(props: Props) {
  const {} = props;

  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default layout;
