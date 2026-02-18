import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "Comprehensive Video Courses",
    description:
      "HD video lessons from industry experts covering licensing, sales, and investment strategies.",
    icon: "📹",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content, quizes, and assignments to enhance your learning experience.",
    icon: "📖",
  },
  {
    title: "Professional Events",
    description:
      "Access a wide range of carefully organized events by industry experts.",
    icon: "📹",
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: "👥",
  },
];
export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}>The Future Of RealEstate Education</Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Learn. Connect.
            <span className="green"> Build Your Future.</span>
          </h1>
          <p className="max-w-175 text-muted-foreground md:text-xl">
            From licensing prep to advanced investment strategies, get the
            education you need to succeed in real estate. Learn from industry
            experts at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Explore Courses
            </Link>

            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/events"
            >
              Join Events
            </Link>

            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </section>
    </>
  );
}
