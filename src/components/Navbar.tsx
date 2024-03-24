"use client";
import React, { useState } from "react";
import Container from "./Container";
import { menuItems } from "@/utils/helper";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ButtonCircle from "./ButtonCircle";
import { MdMenu } from "react-icons/md";
import logo from "@/assets/images/logo.png";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuActivate, setMenuActivate] = useState(false);

  return (
    <nav className="h-[100px] py-[25px]">
      <Container>
        <div className="flex justify-between items-center px-4 md:px-0">
          <div className="relative w-[200px] md:w-[340px] h-[50px]">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center h-[50px] gap-5 rounded-full bg-secondary/30">
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
          <Button bgColor="bg-secondary/30" className="hidden lg:inline-block">
            Let&apos;s talk
          </Button>
          <div className="relative">
            <ButtonCircle
              bgColor="bg-accent"
              icon={<MdMenu />}
              onClick={() => setMenuActivate(!menuActivate)}
              className="inline-block lg:hidden"
            />
            {menuActivate && (
              <div className="block lg:hidden absolute z-10 top-12 md:top-14 right-0 w-60 rounded bg-secondary/50 overflow-hidden">
                <div className="flex flex-col">
                  {menuItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.url}
                      onClick={() => setMenuActivate(false)}
                      className={
                        item.url === pathname
                          ? "p-2 text-primary bg-white font-bold"
                          : "p-2"
                      }
                    >
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
