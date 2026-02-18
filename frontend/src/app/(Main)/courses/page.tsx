import Footer from "@/components/Footer";
import Header from "./components/Header";
import RenderCourses from "./components/RenderCousers";

const testingCoursesData = [
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "Course Name",
        description: "this is the course description, it should be a bit long to test the layout and see how it looks like when we have a lot of text, but it should not be too long to avoid breaking the layout and making it look bad.",
        link: "htttps://google.com",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    }
];

const Courses = () => {
    return (
        <div className="flex min-h-screen flex-col gap-3 items-center justify-center font-poppins">
            <Header />
            <div className="w-full gap-3">
                <h2 className="text-3xl text-center m-10 text-blue-500 font-bold">Over the 2 Chapters, those are the courses we dedicated our time and effort.</h2>
                <h3 className="text-2xl text-center m-10 text-blue-500 font-bold">Courses</h3>
                <RenderCourses courses={testingCoursesData} />
                <Footer />
            </div>
        </div>
    );
};

export default Courses;
