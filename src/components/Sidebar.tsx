import classNames from "classnames";
import { Lesson } from "../components/Lesson";
import { useGetLessonsQuery } from "../graphql/generated";

interface PropsIsOpen {
  isOpen: boolean;
  handleShowSidebar: () => void;
}

export function Sidebar(props: PropsIsOpen) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        "absolute right-0 w-[100%] bg-gray-700 p-4 border-l border-gray-600 md:relative mb:p-6 md:block md:w-[348px] md:right-0",
        {
          "hidden": props.isOpen,
          "z-[100]": props.isOpen,
          "h-screen md:h-auto": !props.isOpen,
        }
      )}
    >
      <span className="font-bold text-xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8 h-3/4 overflow-y-auto  md:overflow-hidden md:h-auto">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              handleShowSidebar={props.handleShowSidebar}
            />
          );
        })}
      </div>
    </aside>
  );
}
