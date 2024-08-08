import Layout from "../components/Layout";
import { IUpcoming } from "../lib/types";
import { upcomingList } from "../lib/upcoming-list";

interface IUpcomingContentEntryProps {
  items: IUpcoming[];
}

function UpcomingContentEntry({ items }: IUpcomingContentEntryProps) {
  return items.map((item: IUpcoming) => {
    return (
      <div className="pt-1 pb-1">
        {item.link ? (
          <a className="hover:bg-customGreen/20 font-regular" href={item.link}>
            {item.content}
          </a>
        ) : (
          <p className="font-regular">{item.content}</p>
        )}
      </div>
    );
  });
}

function UpcomingContent() {
  const years: number[] = [
    ...new Set(
      upcomingList.map((upcoming: IUpcoming) => parseInt(upcoming.year))
    ),
  ];

  const sortedYears: number[] = Array.from(years).sort((a, b) => b - a);

  return (
    <div className="flex w-full flex-col overflow-scroll h-full ">
      {sortedYears.map((year: number) => {
        return (
          <div key={year} className="w-1/2 mx-auto pb-8">
            <h4 className="font-regular text-2xl text-customGreen p-lg">
              {year.toString()}
            </h4>
            <UpcomingContentEntry
              items={upcomingList.filter((item: IUpcoming) => {
                return parseInt(item.year) === year;
              })}
            />
          </div>
        );
      })}
    </div>
  );
}

function Upcoming() {
  return (
    <Layout
      showContactInfo={true}
      selectedPage="news & upcoming"
      content={<UpcomingContent />}
    />
  );
}

export default Upcoming;
