import { Link } from "react-router";
import useCategoryLists from "../../hooks/useCategoryLists";

export default function CategoryBar() {
  const categoryLists = useCategoryLists();

  return (
    <div className="sticky -top-0.5 left-0 z-50 bg-white shadow-sm">
      <div className="mx-5 hidden justify-between md:container md:mx-auto md:flex">
        {categoryLists.map((category, i) => (
          <div key={i} className="group relative py-3 text-sm">
            <Link
              to={category.path}
              className="group-hover:text-accent font-medium transition-all duration-200 ease-in-out"
            >
              {category.name}
            </Link>

            {/* Hover Dropdown Lists */}
            {category.children && (
              <div className="absolute top-full left-0 flex w-48 origin-top scale-y-0 flex-col rounded bg-white opacity-0 shadow-sm transition-all duration-300 ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
                {category.children.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="hover:bg-accent rounded p-2 transition-all duration-200 ease-in-out hover:text-white"
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
