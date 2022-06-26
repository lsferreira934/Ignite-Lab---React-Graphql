import classNames from "classnames";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [isOpen, setIsOpen] = useState(true);

  function handleShowSidebar() {
    setIsOpen(!isOpen);
  }

   
  return (
    <div
      className={classNames("flex flex-col", { fixed: !isOpen })}
    >
      <Header handleShowSidebar={handleShowSidebar} switchIcon={isOpen} />
      <main className="flex flex-1 ">
        {slug ? <Video lessonSlug={slug} disableScreen={isOpen} /> : <div className="flex-1"></div>}
        <Sidebar isOpen={isOpen} handleShowSidebar={handleShowSidebar} />
      </main>
    </div>
  );
}
