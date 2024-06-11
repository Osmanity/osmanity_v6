import { allPosts } from "contentlayer/generated";
// import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";

import Categories from "@/components/blog/Categories";
import PostCard from "@/components/blog/PostCard";
import Heading from "@/components/Heading/Heading";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths: { slug: string }[] = [{ slug: "all" }];

  allPosts.forEach((blog) => {
    if (blog.isPublished) {
      blog.tags.forEach((tag) => {
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }) => {
  // Separating logic to create list of categories from all blogs
  const allCategories = ["all"]; // Initialize with 'all' category
  allPosts.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();

  // Step 2: Filter blogs based on the current category (params.slug)
  const blogs = allPosts.filter((blog) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }
    return blog.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light mb-24">
      <Heading className="pt-52 pb-2" title="Categories" subTitle="Our Blog" />

      {/* <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div> */}
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 ">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            {/* <BlogLayoutThree blog={blog} /> */}
            <PostCard post={blog} index={index} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
