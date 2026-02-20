import Footer from "@/components/Footer";
import Header from "./components/Header";
import RenderContacts from "./components/RenderContacts";

const testingContactsData = [
    {
        name: "The contact name",
        role: "The contact role",
        about: "The contact about lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        link: "The contact link",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "The contact name",
        role: "The contact role",
        about: "The contact about lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        link: "The contact link",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "The contact name",
        role: "The contact role",
        about: "The contact about lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        link: "The contact link",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "The contact name",
        role: "The contact role",
        about: "The contact about lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        link: "The contact link",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "The contact name",
        role: "The contact role",
        about: "The contact about lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        link: "The contact link",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    },
    {
        name: "The contact name",
        role: "The contact role",
        about: "The contact about lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        link: "The contact link",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    }
]

const Contact = () => {
    return (
        <div className="flex min-h-screen flex-col gap-3 items-center justify-center font-poppins">
            <Header />
            <div className="w-full gap-3">
                <RenderContacts contacts={testingContactsData} />
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
