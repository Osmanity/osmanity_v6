import Heading from "@/components/Heading/Heading";
import Categories from "@/components/blog/Categories";
import PostCard from "@/components/blog/PostCard";
import { allPosts } from "contentlayer/generated";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

const CategoryPage = ({ params }) => {
  const allCategories = ["all"]; // Initialize with 'all' category
  allPosts.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slugger.slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();

  // Filter blogs based on the current category (params.slug)
  const blogs = allPosts.filter((blog) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }
    return blog.tags.some((tag) => slugger.slug(tag) === params.slug);
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light mb-24">
      <Heading className="pt-52 pb-2" title="Categories" subTitle="Our Blog" />
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <PostCard post={blog} index={index} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
