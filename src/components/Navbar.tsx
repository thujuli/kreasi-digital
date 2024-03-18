"use client";
import React from "react";
import Container from "./Container";
import { menuItems } from "@/utils/helper";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="h-[100px] py-[25px]">
      <Container>
        <div className="flex justify-between items-center">
          <Image src="/images/logo.png" alt="logo" width={360} height={50} />
          <div className="flex items-center h-[50px] gap-5 rounded-full bg-secondary/30">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className={
                  item.url === pathname
                    ? "flex items-center h-[50px] px-5 rounded-full text-primary bg-white font-bold"
                    : "px-5"
                }
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <Button bgColor="bg-secondary/30">Let&apos;s talk</Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
