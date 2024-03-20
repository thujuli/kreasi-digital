"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import { API_RANDOM_USER, menuItems } from "@/utils/helper";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ButtonCircle from "./ButtonCircle";
import { MdMenu } from "react-icons/md";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "@/lib/hooks";
import { setTeams } from "@/lib/features/teamsSlice";

interface Person {
  firstName: string;
  lastName: string;
  picture: string;
}

const initialPerson: Person = {
  firstName: "",
  lastName: "",
  picture: "",
};

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    getOurTeam();
  }, []);

  const getOurTeam = async () => {
    try {
      const teams: Person[] = [];
      for (let index = 0; index < 3; index++) {
        const person: Person = { ...initialPerson };
        const response = await axios.get(API_RANDOM_USER);

        person.firstName = response.data.results[0].name.first;
        person.lastName = response.data.results[0].name.last;
        person.picture = response.data.results[0].picture.large;
        teams.push(person);
      }

      dispatch(setTeams(teams));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      } else if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <nav className="h-[100px] py-[25px]">
      <Container>
        <div className="flex justify-between items-center px-4 md:px-0">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={360}
            height={50}
            quality={70}
            className="w-[200px] md:w-[360px]"
          />
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
          <ButtonCircle
            bgColor="bg-accent"
            icon={<MdMenu />}
            className="inline-block lg:hidden"
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
