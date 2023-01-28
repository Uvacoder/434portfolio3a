import React from "react";
import { ProfileImage } from "./profile-image";

export const AuthorFooter = () => (
  <div className="flex space-x-3 items-center py-6 my-2 border-t">
    <ProfileImage size={56} />
    <div>
      <div className="font-semibold">uvacoder</div>
      <div>Master Tinkerer</div>
      <div>
        <a
          className="inline-flex text-gray-500 transition-colors duration-200 hover:text-gray-600"
          href="https://twitter.com/VaLandscapes"
        >
          <span>@VaLandscapes</span>
        </a>
      </div>
    </div>
  </div>
);
