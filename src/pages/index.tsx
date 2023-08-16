import FilterListIcon from "@mui/icons-material/FilterList";
import useTranslation from "next-translate/useTranslation";
import Router from "next/router";
import { useState } from "react";

import PostCollection from "../components/homepageComponents/postCollection";
import TopicFilter from "../components/homepageComponents/topicFilter";
import { PostDetail } from "../util/interfaces/postDetailInterface";

const HomePage = ({
  posts,
  topics,
}: {
  posts: PostDetail[];
  topics: string[];
}) => {
  const { t } = useTranslation("common");
  const [topicFilter, setTopicFilter] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const showFilterOnMobile = () => {
    setShowFilter((e: boolean) => !e);
  };
  const toRefreshPage = () => {
    Router.reload();
  };
  // if still no data is fetched (in the case of not using the mock data then goes here)
  if (posts.length === 0) {
    return (
      <div
        className="flex justify-center items-center text-2xl h-[80vh] cursor-pointer"
        onClick={toRefreshPage}
      >
        {t("homepage.noPostMessage")} :(
      </div>
    );
  }
  return (
    <div className="container mx-auto px-1 lg:px-4 my-14">
      <div className="mb-4 flex justify-end">
        <div
          className="inline-flex flex-row items-center px-3 py-2 text-sm border rounded-lg cursor-pointer border-blue-DEE7F3 text-blue-596F8D lg:hidden"
          onClick={showFilterOnMobile}
        >
          <FilterListIcon />
          <span className="ml-3">{t("homepage.filterTitle")}</span>
          {topicFilter.length > 0 && (
            <span className="text-theme-red self-end ml-2">
              {topicFilter.length}
            </span>
          )}
        </div>
      </div>
      <div className="flex">
        <div
          className={`${
            showFilter ? "hidden" : "block"
          } w-full lg:w-9/12 lg:block`}
        >
          <PostCollection topicFilter={topicFilter} posts={posts} />
        </div>
        <div
          className={`${
            showFilter ? "block" : "hidden"
          } w-full lg:w-3/12 lg:block`}
        >
          <TopicFilter
            topics={topics}
            setTopicFilter={setTopicFilter}
            topicFilter={topicFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
