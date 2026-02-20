import Footer from "@/components/Footer";
import Header from "./components/Header";
import RenderMembers from "./components/RenderMembers";

const testingMembersData = [
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    },
    {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
        name: "The Name",
        season: "Season 1 -2-3",
        team: "Media",
        media: "https://example.com"
    }
];

const Members = () => {
    return (
        <div className="flex min-h-screen flex-col gap-3 items-center justify-center font-poppins">
            <Header />
            <div className="w-full gap-3">
                <h2 className="text-3xl text-center m-10 text-blue-500 font-bold">Over the 2 Chapters, those are the ones who dedicated time and effort.</h2>
                <h3 className="text-2xl text-center m-10 text-blue-500 font-bold">Meet The Team</h3>
                <RenderMembers members={testingMembersData} />
                <Footer />
            </div>
        </div>
    );
};

export default Members;
