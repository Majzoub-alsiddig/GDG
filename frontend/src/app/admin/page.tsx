import Link from "next/link";

const page = () => {
  return (
    <div className="text-center">
      <Link href="/admin/add">Add Article</Link>
      <h1>Available articles</h1>
      <div className=" my-auto mx-auto grid grid-cols-5 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <div key={index} className="h-40 w-40 border border-black">
            <h1>Article: {index + 1}</h1>
            <h1>Edit</h1>
            <h1>Delete</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
