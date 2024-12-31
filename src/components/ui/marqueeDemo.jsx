import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    
    img: "/img/1.png",
  },
  {
    
    img: "/img/2.png",
  },
  {
    img: "/img/3.png",
  },
  {
    
    img: "/img/4.png",
  },
  {
    
    img: "/img/11.png",
  },
  {
    
    img: "/img/12.png",
  },
  {
    img: "/img/13.png",
  },
  {
    
    img: "/img/14.png",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative  h-full cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      
        <img alt="" src={img} className="h-10 max-h-50 w-auto object-contain"
        style={{ height: "100%", width: "auto" }} />
        
      
     
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-60 md:h-80  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
