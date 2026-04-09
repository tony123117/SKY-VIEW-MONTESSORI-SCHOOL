import BlogGrid from "./BlogGrid";
import BrainButton from "./BrainButton";
import blog1 from "@/assets/blog/blogimg.png";

export function BlogSection() {
  const posts = [
    {
      id: "1",
      title: "2026/2027 Session Begins",
      excerpt:
        "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach across all platforms. This is a website rebrand.",
      coverImage: blog1,
      author: "Admin",
      publishedAt: "2026-02-01",
      slug: "how-children-learn-through-play",
      link: "/blog/how-children-learn-through-play",
    },
  ];

  return (
    <section className="p-24">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] font-medium font-body">
            From Our Learning Journal
          </h2>
          <p className="max-w-[757px] text-foreground font-heading">
            Thoughts, insights, and updates from our school community—shared to
            support parents, inspire learning, and offer a closer look into life
            at Brainchild.
          </p>
        </div>
        <BrainButton variant="primary">View all</BrainButton>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-18">
        <BlogGrid posts={posts} />
        <BlogGrid posts={posts} />
        <BlogGrid posts={posts} />
        <BlogGrid posts={posts} />
      </div>
    </section>
  );
}
