import { Link } from "react-router";
import useCategoryLists from "../../hooks/useCategoryLists";

export default function CategoryBar() {
  const categoryLists = useCategoryLists();

  return (
    <div className="sticky top-0 left-0 bg-white shadow-sm">
      <div className="mx-5 hidden justify-between md:container md:mx-auto md:flex">
        {categoryLists.map((category, i) => (
          <div key={i} className="group relative py-3 text-sm">
            <Link
              to={category.path}
              className="font-medium transition-all duration-200 ease-in-out group-hover:text-[var(--color-accent)]"
            >
              {category.name}
            </Link>

            {/* Hover Dropdown Lists */}
            {category.children && (
              <div className="absolute top-full left-0 hidden w-48 flex-col rounded bg-white shadow-sm group-hover:flex">
                {category.children.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="rounded p-2 transition-all duration-200 ease-in-out hover:bg-[var(--color-accent)] hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
