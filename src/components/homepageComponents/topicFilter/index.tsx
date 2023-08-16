import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

const EachFilterOption = ({
  topic,
  setTopicFilter,
  topicFilter,
}: {
  topic: string;
  setTopicFilter;
  topicFilter: string[];
}) => {
  const isAlreadySelected: boolean = topicFilter.includes(topic);
  const toSelectThisTopic = () => {
    setTopicFilter((topicArr) => {
      let newTopicArr = [...topicArr];
      if (isAlreadySelected) {
        newTopicArr = topicArr.filter((each) => each !== topic);
      } else {
        newTopicArr.push(topic);
      }
      return newTopicArr;
    });
  };
  return (
    <label className="flex items-center cursor-pointer">
      <div>
        <Checkbox
          checked={isAlreadySelected}
          color="primary"
          onChange={toSelectThisTopic}
          icon={
            <CheckBoxOutlineBlank className="text-theme-red" fontSize="small" />
          }
          checkedIcon={<CheckBox className="text-theme-red" fontSize="small" />}
        />
      </div>
      <span className=" text-blueGray-700">{topic}</span>
    </label>
  );
};

const TopicFilter = ({
  topics,
  setTopicFilter,
  topicFilter,
}: {
  topics: string[];
  setTopicFilter;
  topicFilter: string[];
}) => {
  const { t } = useTranslation("common");

  return (
    <div className="p-1">
      <div className="hidden lg:flex mb-4 text-blueGray-700 text-xl  items-center">
        <FilterListIcon className="mr-2" />
        {t("homepage.filterTitle")}
        {topicFilter.length > 0 && (
          <span className="ml-2 text-sm text-theme-red self-end">
            {topicFilter.length}
          </span>
        )}
      </div>
      <div className="h-[580px] scrollbar scrollbar-w overflow-y-scroll scrollbar-thumb-theme-red  p-2 border ">
        {topics.map((topic, index) => {
          return (
            <EachFilterOption
              topic={topic}
              setTopicFilter={setTopicFilter}
              topicFilter={topicFilter}
              key={`${index}-${topic}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopicFilter;
