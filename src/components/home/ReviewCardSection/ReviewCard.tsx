import { FC, ReactNode } from "react";

export const ReviewCardCategories = {
  positivity: "positivity",
  leadership: "leadership",
  showingUp: "showingUp",
  excellence: "excellence",
  teamPlayer: "teamPlayer",
} as const;

export type ReviewCardCategory = keyof typeof ReviewCardCategories;

export const Tag: FC<{
  size: "sm";
  category: ReviewCardCategory;
}> = (props) => {
  const getTitle = () => {
    switch (props.category) {
      case "leadership":
        return "Leadership";
      case "positivity":
        return "positivity";
      case "showingUp":
        return "Showing Up";
      case "excellence":
        return "Excellence";
      case "teamPlayer":
        return "Team Player";
    }
  };

  const getColor = () => {
    switch (props.category) {
      case "leadership":
        return "bg-reviewCardLeadership-600";
      case "positivity":
        return "bg-reviewCardPositivity-600";
      case "showingUp":
        return "bg-reviewCardShowingUp-600";
      case "excellence":
        return "bg-reviewCardExcellence-600";
      case "teamPlayer":
        return "bg-reviewCardTeamPlayer-600";
    }
  };
  return (
    <div className={`rounded-full ${getColor()} flex px-2 py-1 h-6`}>
      <span className="text-sm font-normal text-center leading-none rounded">
        {getTitle()}
      </span>
    </div>
  );
};

export const ReviewCard: FC<{
  title: string;
  body: string;
  author: string;
  jobTitle: string;
  Tag: ReactNode;
  category: ReviewCardCategory;
}> = (props) => {
  const getColor = () => {
    switch (props.category) {
      case "leadership":
        return "bg-reviewCardLeadership-500";
      case "positivity":
        return "bg-reviewCardPositivity-500";
      case "showingUp":
        return "bg-reviewCardShowingUp-500";
      case "excellence":
        return "bg-reviewCardExcellence-500";
      case "teamPlayer":
        return "bg-reviewCardTeamPlayer-500";
    }
  };

  return (
    <div className="mb-4 flex flex-col bg-white p-2 rounded-md  text-gray-900 w-80 shadow-md overflow-hidden duration-300 transform transition-all  hover:-translate-y-[0.2rem]  hover:shadow-xl hover:border-black ">
      <div className="absolute inset-0 bg-red-100 opacity-0 transition-opacity duration-300 hover:opacity-10 "></div>
      <div className={`${getColor()} rounded flex flex-col items-start p-5`}>
        <h2 className="font-semibold ">{props.title}</h2>
        <div className="pt-2">{props.Tag}</div>
      </div>
      <p className="mt-4">{props.body}</p>
      <h1 className="mt-2">
        <span className="font-bold">- {props.author}</span>, {props.jobTitle} at
        Aumio
      </h1>
    </div>
  );
};
