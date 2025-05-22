import Image from "next/image";

export default function Header() {
  return (
    // This is the header component
    // It will be used to display the title of the page with the background color for the whole of header section
    // Later, it will be used to display the navigation links, search bar, user profile, notifications, settings, and login/logout button
    <div className="bg-cyan-600 text-black text-2xl font-bold p-4 flex justify-center">
      <h1>Vlist
      </h1>
    </div>  
    );
}
