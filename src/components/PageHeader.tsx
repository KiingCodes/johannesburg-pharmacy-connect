import pageHeaderBg from "@/assets/page-header-bg.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <section
    className="relative flex items-center justify-center overflow-hidden py-20 md:py-28"
    style={{ backgroundImage: `url(${pageHeaderBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-green-dark/70" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl animate-fade-in">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
