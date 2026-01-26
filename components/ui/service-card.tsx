"use client";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="relative h-full max-w-full overflow-hidden">
      <div className=" w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full aspect-[4/4] object-cover transition duration-500 bg-foreground/5 hover:scale-105"
        />
      </div>

      <div className="py-3">
        <h5 className="mb-2 text-[22px] leading-tight">{title}</h5>
        <p className="text-[15px] leading-[1.6] text-foreground/70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
