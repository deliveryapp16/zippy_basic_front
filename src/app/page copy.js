"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src="/images/home.png" alt="hero" />
        <div className="pt-6 flex flex-col gap-2 w-100 pb-8">
          <Button
            onClick={() => {
              console.log("Normal");
            }}
          >
            Normal
          </Button>
          <Button
            icon="fa-solid fa-pen"
            onClick={() => {
              console.log("Normal con icono");
            }}
          >
            Normal con icono
          </Button>
          <Button
            loading
            onClick={() => {
              console.log("Loading");
            }}
          >
            Loading
          </Button>
          <Button
            disabled
            onClick={() => {
              console.log("Disabled");
            }}
          >
            Disabled
          </Button>
          <Button
            backgroundColor="bg-white"
            onClick={() => {
              console.log("fondo blanco");
            }}
          >
            Fondo blanco
          </Button>
          <Button
            icon="fa-solid fa-pen"
            backgroundColor="bg-cream"
            onClick={() => {
              console.log("fondo crema con icono");
            }}
          >
            fondo crema con icono
          </Button>
          <Button
            icon="fa-solid fa-pen"
            onClick={() => {
              console.log("Solo icono");
            }}
          ></Button>
        </div>
        <Button
          width="w-20"
          onClick={() => {
            console.log("Normal con otro tamaño");
          }}
        >
          Normal
        </Button>
      </div>
    </div>
  );
}
