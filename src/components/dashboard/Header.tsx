"use client";

import { Bell, Plus, Search } from "lucide-react";
import { Avatar, Button, Divider } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="w-full px-10 sticky top-0 h-16 z-10 bg-black text-white flex items-center justify-between">
      <h2 className="text-2xl font-bold ">HRM</h2>

      <div className="flex items-center space-x-2">
        <Button className="bg-yellow-500 text-sm" isIconOnly>
          <Plus className="text-xs" />
        </Button>
        <Divider className="bg-gray-700 h-8" orientation="vertical" />
        <Button isIconOnly className="bg-gray-800 text-gray-200">
          <Search className="text-xs" />
        </Button>
        <Button isIconOnly className="bg-gray-900 text-white">
          <Bell />
        </Button>
        <Avatar
          isBordered
          size="sm"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </div>
    </header>
  );
};

export default Header;
