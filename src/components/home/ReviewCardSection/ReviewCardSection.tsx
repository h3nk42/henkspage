import { FC } from "react";
import { ReviewCard, ReviewCardCategories, Tag } from "./ReviewCard";

export const ReviewCardSection: FC = () => {
  return (
    <div className="sm:gap-4 md:columns-2 lg:columns-3 p-6  rounded-md">
      <ReviewCard
        title="Henk is someone I look forward to seeing at work."
        Tag={<Tag size="sm" category={ReviewCardCategories.positivity} />}
        body={`For nearly three years, it has been a pleasure to have you in the office. Your ability to approach 'serious' topics with both irony and humor while engaging in deep conversations has been invaluable.`}
        author="Jean"
        jobTitle="Co-Founder"
        category={ReviewCardCategories.positivity}
      />
      <ReviewCard
        title="Henk creates meaningful team bonding experiences."
        Tag={<Tag size="sm" category={ReviewCardCategories.teamPlayer} />}
        body={`You bring us together with fun and thoughtful activities like organizing the Christmas party, hosting board game nights, and motivating us to go bouldering. As a cultural driver, you help our team feel closer and work better together. Thanks to you, our work environment is truly special.`}
        jobTitle="Co-Founder"
        author="Simon"
        category={ReviewCardCategories.teamPlayer}
      />

      <ReviewCard
        title="Henk helped me through a difficult Situation."
        Tag={<Tag size="sm" category={ReviewCardCategories.showingUp} />}
        body={`Thank you, for your contribution with the Auth Project! It's really commendable how you take initiative and lend a helping hand to others; it makes a significant difference.`}
        jobTitle="Co-Founder"
        author="Simon"
        category={ReviewCardCategories.showingUp}
      />
      <ReviewCard
        title="Henk makes my day instantly better."
        Tag={<Tag size="sm" category={ReviewCardCategories.positivity} />}
        body={`Your transparency over the past few weeks, whether regarding personal matters or changes at Aumio, has been incredibly enriching. You significantly shape the culture at Aumio, and I'm grateful to work with you! ✨`}
        jobTitle="Community & Brand Marketing Lead"
        author="Anna"
        category={ReviewCardCategories.positivity}
      />

      <ReviewCard
        title="Henk magically transforms a nightmare project into a piece of cake."
        Tag={<Tag size="sm" category={ReviewCardCategories.excellence} />}
        body={`I find it incredible how you always keep a cool head in times of trouble, respond promptly, and inject humor and fun into everything. Working with you is truly enjoyable.`}
        jobTitle="Psychologist"
        author="Melissa"
        category={ReviewCardCategories.excellence}
      />

      <ReviewCard
        title="Henk leads by example."
        Tag={<Tag size="sm" category={ReviewCardCategories.leadership} />}
        body={`Your unwavering dedication, clear communication, and ability to inspire others make you an invaluable asset to our team. Your leadership fosters a collaborative and positive work environment, and I'm grateful to work alongside you.`}
        jobTitle="Software Engineer"
        author="Morta"
        category={ReviewCardCategories.leadership}
      />
    </div>
  );
};
